import z from "zod";

const paramTenantSlugSchema = z.object({
  tenantSlug: z
    .string("Slug do tenant inválido")
    .nonempty("Slug do tenant não pode ser vazio")
    .nonoptional("Slug do tenant é obrigatório")
    .openapi({ description: "Slug do tenant para busca" }),
});

export default paramTenantSlugSchema;
