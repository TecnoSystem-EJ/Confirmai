import z from "zod";
import cargoUsuarioEnumSchema from "./cargoUsuarioEnumSchema";
import usuarioSchema from "./usuarioSchema";

const registrarUsuarioSchema = z.object({
  request: z
    .object({
      nome: z
        .string("O campo 'nome' deve ser uma string")
        .nonempty("O campo 'nome' não pode ser vazio")
        .nonoptional("O campo 'nome' é obrigatório")
        .transform((nome) =>
          nome
            .trim()
            .replace(/\s+/g, " ")
            .split(" ")
            .map(
              (palavra) =>
                palavra.charAt(0).toUpperCase() + palavra.substring(1)
            )
            .join(" ")
        )
        .openapi({ description: "Usuário teste", example: "Usuário teste" }),
      email: z
        .email("O campo 'email' deve ser um email válido")
        .nonoptional("O campo 'email' é obrigatório")
        .transform((email) => email.trim().toLowerCase())
        .openapi({
          description: "E-mail do usuário",
          example: "hello@example.com",
        }),
      senha: z
        .string("O campo 'senha' deve ser uma string")
        .min(6, "O campo 'senha' deve ter no mínimo 6 caracteres")
        .max(20, "O campo 'senha' deve ter no máximo 20 caracteres")
        .nonoptional("O campo 'senha' é obrigatório")
        .openapi({
          description: "Senha do usuário",
          example: "senha123",
        }),
      cargo: cargoUsuarioEnumSchema,
    })
    .strict(),

  response: z
    .object({
      mensagem: z
        .string()
        .openapi({
          description: "Mensagem de sucesso da criação",
          example: "Usuario cadastrado com sucesso!",
        }),
      usuario: usuarioSchema,
    })
    .strict(),
});

export type RegistrarUsuarioRequestSchema = z.infer<
  typeof registrarUsuarioSchema.shape.request
>;

export type RegistrarUsuarioResponseSchema = z.infer<
  typeof registrarUsuarioSchema.shape.response
>;

export default registrarUsuarioSchema;
