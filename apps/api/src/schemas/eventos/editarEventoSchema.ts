import z from "zod";
import paramUUIDSchema from "../paramUUIDSchema";
import criarEventoSchema from "./criarEventoSchema";

const editarEventoSchema = z.object({
  params: paramUUIDSchema,
  request: z
    .object({
      titulo: z
        .string("O título deve ser uma string.")
        .optional()
        .transform((titulo) =>
          titulo === undefined || titulo === "" ? null : titulo,
        )
        .openapi({
          description: "Título de evento (opcional)",
          example: "Evento teste",
        }),
      descricao: z
        .string("A descrição deve ser uma string.")
        .optional()
        .transform((desc) => (desc === undefined || desc === "" ? null : desc))
        .openapi({
          description: "Descrição do evento (opcional)",
          example: "Descrição teste",
        }),
      closingDate: z.iso
        .date("A data de encerramento deve estar no formato ISO 8601.")
        .optional()
        .transform((date) => (date ? new Date(date) : null))
        .openapi({
          description: "Data de encerramento do evento (opcional)",
          example: new Date().toISOString().split("T")[0],
        }),
      startDate: z.iso
        .date("A data de início deve estar no formato ISO 8601.")
        .optional()
        .transform((date) => (date ? new Date(date) : null))
        .openapi({
          description: "Data de início do evento (opcional)",
          example: new Date().toISOString().split("T")[0],
        }),
    })
    .refine(
      (data) => {
        if (data.closingDate && data.startDate) {
          return data.startDate <= data.closingDate;
        }
        return true;
      },
      {
        message:
          "A data de encerramento deve ser maior ou igual a data de início.",
        path: ["closingDate", "startDate"],
      },
    )
    .strict(),
  response: criarEventoSchema.shape.response,
});

export type EditarEventoParamsSchema = z.infer<
  typeof editarEventoSchema.shape.params
>;

export type EditarEventoRequestSchema = z.infer<
  typeof editarEventoSchema.shape.request
>;

export type EditarEventoResponseSchema = z.infer<
  typeof editarEventoSchema.shape.response
>;

export default editarEventoSchema;
