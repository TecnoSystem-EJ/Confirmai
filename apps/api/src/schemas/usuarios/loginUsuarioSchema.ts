import z from "zod";
import usuarioSchema from "./usuarioSchema";

const loginUsuarioSchema = z
  .object({
    request: z
      .object({
        email: z
          .email("O campo 'email' deve ser um email válido")
          .nonoptional("O campo 'email' é obrigatório")
          .openapi({
            description: "E-mail do usuário",
            example: "hello@example.com",
          }),
        senha: z
          .string("O campo 'senha' deve ser uma string")
          .nonoptional("O campo 'senha' é obrigatório")
          .openapi({
            description: "Senha do usuário",
            example: "senha123",
          }),
      })
      .strict(),
    response: z.object({
      token: z.jwt({ alg: "HS256" }).openapi({
        description: "Token do usuário válido por 1 dia",
        example:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.fake-signature",
      }),
      usuario: usuarioSchema,
      expira_em: z.string().openapi({
        description: "Data de expiração do token",
        example: new Date().toLocaleString(),
      }),
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
