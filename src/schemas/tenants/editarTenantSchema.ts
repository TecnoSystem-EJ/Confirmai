import z from "zod";
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
      mensagem: z.string(),
      tenant: tenantScehma,
      acesso_url: z.url(),
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
