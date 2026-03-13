import z from "zod";
import batchTicketSchema from "./batchTicketSchema.js";
import ticketTypeSchema from "./ticketTypeSchema.js";

const detalhesBatchTicketSchema = z.object({
  params: z.object({
    eventoId: z.string().uuid("O ID do evento deve ser um UUID válido."),
    batchId: z.string().uuid("O ID do lote deve ser um UUID válido."),
    batchTicketId: z
      .string()
      .uuid("O ID do ticket no lote deve ser um UUID válido."),
  }),
  response: batchTicketSchema.extend({
    ticketType: ticketTypeSchema,
  }),
});

export type DetalhesBatchTicketParamsSchema = z.infer<
  typeof detalhesBatchTicketSchema.shape.params
>;
export type DetalhesBatchTicketResponseSchema = z.infer<
  typeof detalhesBatchTicketSchema.shape.response
>;

export default detalhesBatchTicketSchema;
