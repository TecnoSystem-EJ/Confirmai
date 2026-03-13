import Decimal from "decimal.js";
import z from "zod";
import batchTicketSchema from "./batchTicketSchema.js";

const criarBatchTicketSchema = z
  .object({
    params: z.object({
      eventoId: z
        .uuid("O ID do evento deve ser um UUID válido.")
        .nonoptional("O ID do evento é obrigatório.")
        .openapi({ description: "O ID do evento." }),
      batchId: z
        .uuid("O ID do lote deve ser um UUID válido.")
        .nonoptional("O ID do lote é obrigatório.")
        .openapi({ description: "O ID do lote." }),
    }),
    request: z
      .object({
        ticketTypeId: z
          .uuid("O ID do tipo de ingresso deve ser válido.")
          .nonoptional("O ID do tipo de ingresso é obrigatório.")
          .openapi({ description: "O ID do tipo de ingresso." }),
        price: z
          .number("O campo 'price' deve ser um número.")
          .min(0, "O preço deve ser maior ou igual a 0.")
          .nonoptional("O preço é obrigatório.")
          .transform((price) => new Decimal(price))
          .openapi({ description: "O preço do ingresso.", example: 100.0 }),
        quantity: z
          .int("O campo 'quantity' deve ser um número inteiro.")
          .min(1, "A quantidade deve ser maior ou igual a 1.")
          .nonoptional("A quantidade é obrigatória.")
          .openapi({ description: "A quantidade de ingressos.", example: 50 }),
      })
      .strict(),
    response: z
      .object({
        mensagem: z.string().openapi({
          description: "A mensagem de sucesso.",
          example: "Ticket adicionado ao lote com sucesso!",
        }),
        batchTicket: batchTicketSchema.openapi({
          description: "O lote de ingressos criado.",
        }),
      })
      .strict(),
  })
  .strict();

export type CriarBatchTicketRequestSchema = z.infer<
  typeof criarBatchTicketSchema.shape.request
>;
export type CriarBatchTicketResponseSchema = z.infer<
  typeof criarBatchTicketSchema.shape.response
>;
export type CriarBatchTicketParamsSchema = z.infer<
  typeof criarBatchTicketSchema.shape.params
>;

export default criarBatchTicketSchema;
