import bcryptjs from "bcryptjs";
import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { ConflitoException } from "../../exceptions";
import {
  CriarTenantRequestSchema,
  CriarTenantResponseSchema,
} from "../../schemas/tenants/criarTenantSchema";
import { gerarTenantSlug } from "../../services/tenantService";

const criarTenant: RequestHandler<
  any,
  CriarTenantResponseSchema,
  CriarTenantRequestSchema,
  any
> = async (req, res) => {
  const {
    nome,
    slug,
    cnpj,
    telefone,
    email,
    site,
    logoUrl,
    adminEmail,
    adminSenha,
    adminNome,
  } = req.body;

  const cnpjToSave = cnpj.replace(/[^\d]/g, "");
  const telefoneToSave = telefone.replace(/[^\d]/g, "");

  // Verificar se slug já existe
  const slugExistente = await prisma.tenants.findUnique({
    where: { slug },
  });

  if (slugExistente) {
    throw new ConflitoException("Slug já está em uso");
  }

  // Verificar se email já existe
  const emailExistente = await prisma.tenants.findUnique({
    where: {
      email,
    },
  });

  if (emailExistente) {
    throw new ConflitoException("E-mail já está em uso");
  }

  // Verificar se email já existe
  const cnpjExistente = await prisma.tenants.findUnique({
    where: {
      cnpj: cnpjToSave,
    },
  });

  if (cnpjExistente) {
    throw new ConflitoException("CNPJ já está em uso");
  }

  // Criar tenant e admin em uma transação
  const result = await prisma.$transaction(async (tx) => {
    // Criar tenant
    const tenant = await tx.tenants.create({
      data: {
        nome,
        slug,
        cnpj: cnpjToSave,
        email,
        telefone: telefoneToSave,
        logoUrl,
        site,
      },
    });

    // Criar usuário admin
    const senha = await bcryptjs.hash(adminSenha, 10);

    const admin = await tx.usuarios.create({
      data: {
        tenantId: tenant.id,
        email: adminEmail,
        senhaHash: senha,
        nome: adminNome,
        cargo: "admin",
      },
    });

    const { senhaHash, ...adminSemSenha } = admin;

    return { tenant, admin: adminSemSenha };
  });

  res.status(201).json({
    mensagem: "Tenant criado com sucesso",
    tenant: result.tenant,
    admin: result.admin,
    acesso_url: gerarTenantSlug(slug),
  });
};

export default criarTenant;
