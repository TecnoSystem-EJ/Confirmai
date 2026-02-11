import z from "zod";

const tenantScehma = z
  .object({
    id: z.uuid().openapi({ description: "ID (UUID) da tenant" }),
    nome: z
      .string()
      .openapi({ description: "Nome da tenant", example: "Tenant teste" }),
    slug: z
      .string()
      .openapi({ description: "Slug da tenant", example: "slug-teste" }),
    email: z.email().openapi({
      description: "E-mail da tenant",
      example: "hello@example.com",
    }),
    cnpj: z.string().openapi({
      description: "CNPJ da tenant",
      example: "XX.XXX.XXX/0001-XX",
    }),
    telefone: z.string().openapi({
      description: "Telefone da tenant",
      example: "(XX) XXXXX-XXXX",
    }),
    logoUrl: z.url().nullable().openapi({
      description: "URL da logo da tenant",
      example: "https://logo.com",
    }),
    site: z.url().nullable().openapi({
      description: "URL do site da tenant",
      example: "https://site-tenant.com",
    }),
    status: z
      .enum(["ativo", "cancelado", "suspenso"])
      .openapi({
        description: "Status da tenant",
        examples: ["ativo", "cancelado", "suspenso"],
      }),
    createdAt: z.date().openapi({ description: "Data de criação" }),
    updated_at: z.date().openapi({ description: "Data de atuallização" }),
  })
  .strict();

export type TenantSchema = z.infer<typeof tenantScehma>;

export default tenantScehma;
