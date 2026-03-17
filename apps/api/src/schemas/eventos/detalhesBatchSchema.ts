import z from "zod";
import batchSchema from "./batchSchema.js";
import batchTicketSchema from "./batchTicketSchema.js";
import ticketTypeSchema from "./ticketTypeSchema.js";

const detalhesBatchSchema = z.object({
  params: z.object({
    eventoId: z
      .uuid("O ID do evento deve ser um UUID válido.")
      .nonempty("O ID do evento é obrigatório.")
      .openapi({ description: "ID (UUID) do evento" }),
    batchId: z
      .uuid("O ID do lote deve ser um UUID válido.")
      .nonempty("O ID do lote é obrigatório.")
      .openapi({ description: "ID (UUID) do lote" }),
  }),
  response: batchSchema.extend({
    batchTickets: batchTicketSchema
      .extend({
        ticketType: ticketTypeSchema,
      })
      .array(),
  }),
});

export type DetalhesBatchParamsSchema = z.infer<
  typeof detalhesBatchSchema.shape.params
>;
export type DetalhesBatchResponseSchema = z.infer<
  typeof detalhesBatchSchema.shape.response
>;

export default detalhesBatchSchema;
