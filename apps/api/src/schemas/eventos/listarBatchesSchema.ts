import z from "zod";
import batchSchema from "./batchSchema.js";

const listarBatchesSchema = z.object({
  params: z.object({
    eventoId: z
      .uuid("O ID do evento deve ser um UUID válido.")
      .nonempty("O ID do evento é obrigatório.")
      .openapi({ description: "ID (UUID) do evento" }),
  }),
  response: z.array(batchSchema),
});

export type ListarBatchesParamsSchema = z.infer<
  typeof listarBatchesSchema.shape.params
>;
export type ListarBatchesResponseSchema = z.infer<
  typeof listarBatchesSchema.shape.response
>;

export default listarBatchesSchema;
