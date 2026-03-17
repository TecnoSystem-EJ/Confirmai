import z from "zod";

const deletarBatchSchema = z.object({
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
  response: z.object({
    mensagem: z.string().openapi({ example: "Lote deletado com sucesso!" }),
  }),
});

export type DeletarBatchParamsSchema = z.infer<
  typeof deletarBatchSchema.shape.params
>;
export type DeletarBatchResponseSchema = z.infer<
  typeof deletarBatchSchema.shape.response
>;

export default deletarBatchSchema;
