import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { ConflitoException } from "../../exceptions";
import {
  EditarTenantRequestSchema,
  EditarTenantResponseSchema,
} from "../../schemas/tenants/editarTenantSchema";
import { gerarTenantSlug } from "../../services/tenantService";

const editarTenant: RequestHandler<
  any,
  EditarTenantResponseSchema,
  EditarTenantRequestSchema,
  any
> = async (req, res) => {
  const { cnpj, email, slug, telefone } = req.body;

  const cnpjToSave = cnpj?.replace(/[^\d]/g, "");
  const telefoneToSave = telefone?.replace(/[^\d]/g, "");

  // Verificar se slug já existe
  if (slug) {
    const slugExistente = await prisma.tenants.findUnique({
      where: { slug },
    });

    if (slugExistente) {
      throw new ConflitoException("Slug já está em uso");
    }
  }

  // Verificar se email já existe
  if (email) {
    const emailExistente = await prisma.tenants.findUnique({
      where: {
        email,
      },
    });

    if (emailExistente) {
      throw new ConflitoException("E-mail já está em uso");
    }
  }

  // Verificar se email já existe
  if (cnpj) {
    const cnpjExistente = await prisma.tenants.findUnique({
      where: {
        cnpj: cnpjToSave,
      },
    });

    if (cnpjExistente) {
      throw new ConflitoException("CNPJ já está em uso");
    }
  }

  const tenantAtualizada = await prisma.tenants.update({
    where: {
      slug: req.tenant!.slug,
    },
    data: {
      ...req.body,
      telefone: telefoneToSave,
      cnpj: cnpjToSave,
    },
  });

  res.status(201).json({
    mensagem: "Tenant atualizada com sucesso",
    tenant: tenantAtualizada,
    acesso_url: gerarTenantSlug(tenantAtualizada.slug),
  });
};

export default editarTenant;
