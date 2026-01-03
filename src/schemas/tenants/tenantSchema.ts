import z from "zod";

const tenantScehma = z
  .object({
    id: z.uuid(),
    nome: z.string(),
    slug: z.string(),
    email: z.email(),
    cnpj: z.string(),
    telefone: z.string(),
    logoUrl: z.url().nullable(),
    site: z.url().nullable(),
    status: z.enum(["ativo", "cancelado", "suspenso"]),
    createdAt: z.date(),
    updated_at: z.date(),
  })
  .strict();

export type TenantSchema = z.infer<typeof tenantScehma>;

export default tenantScehma;
