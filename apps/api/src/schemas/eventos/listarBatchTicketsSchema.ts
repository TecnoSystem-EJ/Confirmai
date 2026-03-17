import z from "zod";
import batchTicketSchema from "./batchTicketSchema.js";
import ticketTypeSchema from "./ticketTypeSchema.js";

const listarBatchTicketsSchema = z.object({
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
  response: z.array(batchTicketSchema.extend({ ticketType: ticketTypeSchema })),
});

export type ListarBatchTicketsParamsSchema = z.infer<
  typeof listarBatchTicketsSchema.shape.params
>;
export type ListarBatchTicketsResponseSchema = z.infer<
  typeof listarBatchTicketsSchema.shape.response
>;

export default listarBatchTicketsSchema;
