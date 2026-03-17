import Decimal from "decimal.js";
import z from "zod";
import batchTicketSchema from "./batchTicketSchema.js";

const editarBatchTicketSchema = z
  .object({
    params: z.object({
      eventoId: z
        .uuid("O ID do evento deve ser um UUID válido.")
        .nonempty("O ID do evento é obrigatório.")
        .openapi({ description: "ID (UUID) do evento" }),
      batchId: z
        .uuid("O ID do lote deve ser um UUID válido.")
        .nonempty("O ID do lote é obrigatório.")
        .openapi({ description: "ID (UUID) do lote" }),
      batchTicketId: z
        .uuid("O ID do ticket no lote deve ser um UUID válido.")
        .nonempty("O ID do ticket no lote é obrigatório.")
        .openapi({ description: "ID (UUID) do ticket no lote" }),
    }),
    request: z
      .object({
        price: z
          .number("O campo 'price' deve ser um número.")
          .min(0, "O preço deve ser maior ou igual a 0.")
          .optional()
          .transform((price) => (price ? new Decimal(price) : null))
          .openapi({ description: "O preço do ingresso.", example: 100.0 }),
        quantity: z
          .int("O campo 'quantity' deve ser um número inteiro.")
          .min(1, "A quantidade deve ser maior ou igual a 1.")
          .optional()
          .transform((quant) => quant ?? null)
          .openapi({ description: "A quantidade de ingressos.", example: 50 }),
        isActive: z
          .boolean("O campo isActive deve ser um booleano")
          .optional()
          .transform((active) => active ?? null)
          .openapi({
            description: "Se o ingresso está ativo ou não (opcional)",
            example: true,
          }),
      })
      .strict(),
    response: z
      .object({
        mensagem: z.string(),
        batchTicket: batchTicketSchema,
      })
      .strict(),
  })
  .strict();

export type EditarBatchTicketRequestSchema = z.infer<
  typeof editarBatchTicketSchema.shape.request
>;
export type EditarBatchTicketResponseSchema = z.infer<
  typeof editarBatchTicketSchema.shape.response
>;
export type EditarBatchTicketParamsSchema = z.infer<
  typeof editarBatchTicketSchema.shape.params
>;

export default editarBatchTicketSchema;
