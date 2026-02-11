import z from "zod";
import eventoSchema from "../eventos/eventoSchema";
import statusInscricaoEnumSchema from "./statusInscricaoEnumSchema";

const inscricaoSchema = z
  .object({
    id: z.uuid().openapi({ description: "ID (UUID) da inscrição" }),
    eventoId: z.uuid().openapi({ description: "ID (UUID) do evento inscrito" }),
    nome: z.string().openapi({
      description: "Nome do usuário inscrito",
      example: "Usuário teste",
    }),
    email: z.email().openapi({
      description: "E-mail do usuário inscrito",
      example: "hello@example.com",
    }),
    curso: z.string().nullable().openapi({
      description: "Curso do usuário inscrito",
      example: "Engenharia de software",
    }),
    status: statusInscricaoEnumSchema,
    createdAt: z.date().openapi({ description: "Data da criação" }),
    updatedAt: z.date().openapi({ description: "Data da atualização" }),
    evento: eventoSchema,
  })
  .strict();

export default inscricaoSchema;
