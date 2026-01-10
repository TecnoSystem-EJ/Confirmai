import crypto from "crypto";
import z from "zod";

const eventoSchema = z
  .object({
    id: z.uuid().openapi({ description: "ID (UUID) do evento" }),
    titulo: z
      .string()
      .openapi({ description: "Título do evento", example: "Evento teste" }),
    descricao: z.string().nullable().openapi({
      description: "Descrição do evento",
      example: "Descrição teste",
    }),
    linkSlug: z.string().openapi({
      description: "Slug do evento",
      example: `evento-teste-${crypto.randomBytes(4).toString("hex")}`,
    }),
    closingDate: z
      .date()
      .openapi({ description: "Data de encerramento de evento" }),
    status: z
      .string()
      .openapi({ description: "Status do evento", example: "ativo" }),
    createdAt: z.date().openapi({ description: "Data de criação do evento" }),
    updatedAt: z
      .date()
      .openapi({ description: "Data de atualização do evento" }),
  })
  .strict();

export default eventoSchema;
