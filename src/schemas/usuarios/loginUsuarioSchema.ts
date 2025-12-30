import z from "zod";
import usuarioSchema from "./usuarioSchema";

const loginUsuarioSchema = z
  .object({
    request: z
      .object({
        email: z
          .email("O campo 'email' deve ser um email válido")
          .nonoptional("O campo 'email' é obrigatório"),
        senha: z
          .string("O campo 'senha' deve ser uma string")
          .nonoptional("O campo 'senha' é obrigatório"),
      })
      .strict(),
    response: z.object({
      token: z.string(),
      usuario: usuarioSchema,
      expira_em: z.string(),
    }),
  })
  .strict();

export type LoginUsuarioRequestSchema = z.infer<
  typeof loginUsuarioSchema.shape.request
>;

export type LoginUsuarioResponseSchema = z.infer<
  typeof loginUsuarioSchema.shape.response
>;

export default loginUsuarioSchema;
