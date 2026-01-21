import { FRONTEND_URL } from "../config/constants";
import { prisma } from "../config/database";
import { NaoAutorizadoException, NaoEncontradoException } from "../exceptions";

export const gerarTenantSlug = (slug: string): string => {
  let endIndex = 7;
  if (FRONTEND_URL?.startsWith("https")) {
    endIndex = 8;
  }

  return FRONTEND_URL!
    .substring(0, endIndex)
    .concat(slug, ".", FRONTEND_URL!.substring(endIndex));
};

export const verificarCNPJ = (cnpj: string): boolean => {
  // Remove caracteres não numéricos
  cnpj = cnpj.replace(/[^\d]/g, "");

  // Deve ter 14 dígitos
  if (cnpj.length !== 14) return false;

  // Rejeita sequências inválidas
  if (/^(\d)\1+$/.test(cnpj)) return false;

  const calcDigit = (base: string, factors: number[]) => {
    const sum = base
      .split("")
      .reduce((acc, digit, i) => acc + Number(digit) * factors[i], 0);

    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };

  const factors1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const factors2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];

  const base12 = cnpj.slice(0, 12);
  const digit1 = calcDigit(base12, factors1);
  const digit2 = calcDigit(base12 + digit1, factors2);

  return cnpj === base12 + digit1 + digit2;
};

export const verificarTenantExistente = async (slug: string) => {
  const tenant = await prisma.tenants.findUnique({
    where: { slug },
  });

  if (!tenant) {
    throw new NaoEncontradoException("Empresa não encontrada");
  }

  if (tenant.status !== "ativo") {
    throw new NaoAutorizadoException("Conta suspensa ou cancelada");
  }

  return tenant;
};
