import bcryptjs from "bcryptjs";
import crypto from "crypto";
import jwt from "jsonwebtoken";
import { usuariosModel } from "../generated/prisma/models";
import { JWT_SECRET } from "../src/config/constants";
import { prisma } from "../src/config/database";

export const gerarTokenTeste = (
  tenantId: string,
  usuarioId: string,
  usuarioEmail: string,
  usuarioNome: string,
  cargo: "admin" | "membro" | "global_admin"
) => {
  return jwt.sign(
    {
      id: usuarioId,
      nome: usuarioNome,
      email: usuarioEmail,
      cargo,
      tenant: {
        id: tenantId,
      },
    },
    JWT_SECRET,
    { expiresIn: "1h" }
  );
};

export const limparBancoTeste = async () => {
  // Limpa tabelas antes de criar para garantir isolamento
  // A ordem importa por causa das chaves estrangeiras
  await prisma.inscricoes.deleteMany();
  await prisma.eventos.deleteMany();
  await prisma.usuarios.deleteMany();
  await prisma.tenants.deleteMany();
};

export const criarTenantTeste = async (
  status: "ativo" | "cancelado" | "suspenso" = "ativo",
  overrides: Partial<{
    nome: string;
    slug: string;
    cnpj: string;
    email: string;
    telefone: string;
  }> = {}
) => {
  const randomSuffix = crypto.randomBytes(4).toString("hex");
  return await prisma.tenants.create({
    data: {
      nome: `Tenant Teste ${randomSuffix}`,
      slug: overrides.slug || `tenant-teste-${randomSuffix}`,
      cnpj: overrides.cnpj || gerarCNPJ(),
      email: overrides.email || `tenant-${randomSuffix}@teste.com`,
      telefone: "11999999999",
      status,
      ...overrides,
    },
  });
};

export const criarEventoTeste = async (
  tenantId: string,
  status: "ativo" | "encerrado" | "rascunho" = "ativo",
  overrides: Partial<{
    titulo: string;
    linkSlug: string;
    descricao: string;
    closingDate: Date;
    limiteVagas: number;
  }> = {}
) => {
  const randomSuffix = crypto.randomBytes(4).toString("hex");
  return await prisma.eventos.create({
    data: {
      titulo: overrides.titulo || `Tenant Teste ${randomSuffix}`,
      linkSlug: overrides.linkSlug || `evento-teste-${randomSuffix}`,
      closingDate: overrides.closingDate || new Date(Date.now() + 7 * 86400000),
      descricao: overrides.descricao || "Descrição do evento de teste",
      limiteVagas: overrides.limiteVagas,
      status,
      tenantId,
    },
  });
};

export const criarInscricaoTeste = async (
  tenantId: string,
  eventoId: string,
  usuario: usuariosModel
) => {
  return await prisma.inscricoes.create({
    data: {
      tenantId,
      eventoId,
      nome: usuario.nome,
      email: usuario.email,
      curso: "Curso teste",
    },
  });
};

export const criarUsuarioTeste = async (
  tenantId: string,
  overrides: Partial<{
    nome: string;
    email: string;
    cargo: "admin" | "membro" | "global_admin";
  }> = {}
) => {
  const senhaHash = await bcryptjs.hash("senha-teste", 10);
  const randomSuffix = crypto.randomBytes(4).toString("hex");

  return await prisma.usuarios.create({
    data: {
      nome: "Usuario Teste",
      email: overrides.email || `usuario-${randomSuffix}@teste.com`,
      cargo: overrides.cargo || "admin",
      senhaHash,
      tenantId,
      ...overrides,
    },
  });
};

function gerarCNPJ(): string {
  // Gera 14 dígitos aleatórios
  let result = "";
  for (let i = 0; i < 14; i++) {
    result += Math.floor(Math.random() * 10).toString();
  }
  return result;
}
