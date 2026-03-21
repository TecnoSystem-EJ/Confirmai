import z from "zod";

const deletarBatchTicketSchema = z.object({
  params: z.object({
    eventoId: z.string().uuid("O ID do evento deve ser um UUID válido."),
    batchId: z.string().uuid("O ID do lote deve ser um UUID válido."),
    batchTicketId: z
      .string()
      .uuid("O ID do ticket no lote deve ser um UUID válido."),
  }),
  response: z.object({
    mensagem: z
      .string()
      .openapi({ example: "Ticket do lote deletado com sucesso!" }),
  }),
});

export type DeletarBatchTicketParamsSchema = z.infer<
  typeof deletarBatchTicketSchema.shape.params
>;
export type DeletarBatchTicketResponseSchema = z.infer<
  typeof deletarBatchTicketSchema.shape.response
>;

export default deletarBatchTicketSchema;
