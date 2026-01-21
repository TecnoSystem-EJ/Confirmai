import z from "zod";
import { generateSlug } from "../../services/eventoService";
import criarTenantSchema from "./criarTenantSchema";
import tenantScehma from "./tenantSchema";

const editarTenantSchema = z.object({
  request: criarTenantSchema.shape.request
    .omit({
      adminEmail: true,
      adminNome: true,
      adminSenha: true,
    })
    .partial(),
  response: z
    .object({
      mensagem: z.string().openapi({
        description: "Mensagem de sucesso da atualização",
        example: "Tenant atualizada com sucesso",
      }),
      tenant: tenantScehma,
      acesso_url: z
        .url()
        .openapi({
          description: "URL de acesso a tenant",
          example: generateSlug("slug-teste"),
        }),
    })
    .strict(),
});

export type EditarTenantRequestSchema = z.infer<
  typeof editarTenantSchema.shape.request
>;

export type EditarTenantResponseSchema = z.infer<
  typeof editarTenantSchema.shape.response
>;

export default editarTenantSchema;
