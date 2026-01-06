import z from "zod";
import paramUUIDSchema from "../paramUUIDSchema";
import inscricaoSchema from "./inscricaoSchema";

const criarInscricaoSchema = z.object({
  params: paramUUIDSchema,
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
        .openapi({
          description: "Nome do usuário",
          example: "Usuário teste",
        }),
      email: z
        .email("O campo 'email' deve ser um email válido")
        .nonoptional("O campo 'email' é obrigatório")
        .transform((email) => email.trim().toLowerCase())
        .openapi({
          description: "E-mail do usuário",
          example: "hello@example.com",
        }),
      curso: z
        .string("O campo 'curso' deve ser uma string")
        .nonempty("O campo 'curso' não pode ser uma string vazia")
        .optional()
        .openapi({
          description: "Curso do usuário",
          example: "Engenharia de software",
        }),
    })
    .strict(),
  response: z
    .object({
      mensagem: z.string().openapi({
        description: "Mensgaem de sucesso da inscrição",
        example: "Inscrição realizada com sucesso!",
      }),
      inscricao: inscricaoSchema,
    })
    .strict(),
});

export type CriarInscricaoRequestSchema = z.infer<
  typeof criarInscricaoSchema.shape.request
>;

export type CriarInscricaoParamsSchema = z.infer<
  typeof criarInscricaoSchema.shape.params
>;

export type CriarInscricaoResponseSchema = z.infer<
  typeof criarInscricaoSchema.shape.response
>;

export default criarInscricaoSchema;
