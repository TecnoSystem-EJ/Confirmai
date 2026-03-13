import z from "zod";
import batchSchema from "./batchSchema.js";

const editarBatchSchema = z
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
    }),
    request: z
      .object({
        name: z
          .string("O campo 'name' deve ser uma string")
          .optional()
          .transform((name) =>
            name === undefined || name === "" ? null : name,
          )
          .openapi({
            description: "Nome do lote (opcional)",
            example: "1º Lote",
          }),
        description: z
          .string("O campo 'description' deve ser uma string")
          .optional()
          .transform((desc) =>
            desc === undefined || desc === "" ? null : desc,
          )
          .openapi({
            description: "Descrição do lote (opcional)",
            example: "Lote promocional",
          }),
        startDate: z.iso
          .date("A data de início deve estar no formato ISO 8601.")
          .optional()
          .transform((date) => (date ? new Date(date) : null))
          .openapi({
            description: "Data de início do lote (opcional)",
            example: new Date().toISOString().split("T")[0],
          }),
        endDate: z.iso
          .date("A data de término deve estar no formato ISO 8601.")
          .optional()
          .transform((date) => (date ? new Date(date) : null))
          .openapi({
            description: "Data de término do lote (opcional)",
            example: new Date().toISOString().split("T")[0],
          }),
        isActive: z
          .boolean("O campo isActive deve ser um booleano")
          .optional()
          .transform((active) => active ?? null)
          .openapi({
            description: "Se o lote está ativo ou não (opcional)",
            example: true,
          }),
        order: z
          .int("O campo 'ordem' deve ser um número inteiro.")
          .optional()
          .refine(
            (order) => {
              if (order) {
                return order >= 0;
              }
              return true;
            },
            { error: "O campo 'order' deve ser maior ou igual a 0" },
          )
          .transform((order) => order ?? null)
          .openapi({
            description: "Ordem de exibição do lote (opcional)",
            example: 1,
          }),
      })
      .refine(
        (data) => {
          if (data.endDate && data.startDate) {
            return data.startDate <= data.endDate;
          }
          return true;
        },
        {
          error:
            "A data de encerramento deve ser maior ou igual a data de início.",
          path: ["endDate", "startDate"],
        },
      )
      .strict(),
    response: z
      .object({
        mensagem: z
          .string()
          .openapi({ example: "Lote atualizado com sucesso!" }),
        batch: batchSchema,
      })
      .strict(),
  })
  .strict();

export type EditarBatchRequestSchema = z.infer<
  typeof editarBatchSchema.shape.request
>;
export type EditarBatchResponseSchema = z.infer<
  typeof editarBatchSchema.shape.response
>;
export type EditarBatchParamsSchema = z.infer<
  typeof editarBatchSchema.shape.params
>;

export default editarBatchSchema;
