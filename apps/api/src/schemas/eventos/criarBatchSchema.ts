import z from "zod";
import batchSchema from "./batchSchema.js";

const criarBatchSchema = z
  .object({
    params: z.object({
      eventoId: z
        .uuid("O ID do evento deve ser um UUID válido.")
        .nonempty("ID do evento não pode ser vazio")
        .nonoptional("ID do evento é obrigatório")
        .openapi({ description: "ID do evento" }),
    }),
    request: z
      .object({
        name: z
          .string("O campo 'name' deve ser uma string")
          .min(1, "O nome não pode estar vazio.")
          .nonoptional("O campo 'name' é obrigatório")
          .openapi({ description: "Nome do lote", example: "1º Lote" }),
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
          .nonoptional("A data de início é obrigatória")
          .transform((date) => new Date(date))
          .openapi({
            description: "Data de início do lote",
            example: new Date().toISOString().split("T")[0],
          }),
        endDate: z.iso
          .date("A data de término deve estar no formato ISO 8601.")
          .nonoptional("A data de término é obrigatória")
          .transform((date) => new Date(date))
          .openapi({
            description: "Data de término do lote",
            example: new Date().toISOString().split("T")[0],
          }),
      })
      .refine((data) => data.startDate <= data.endDate, {
        message:
          "A data de encerramento deve ser maior ou igual a data de início.",
        path: ["endDate", "startDate"],
      })
      .strict(),
    response: z
      .object({
        mensagem: z.string().openapi({ example: "Lote criado com sucesso!" }),
        batch: batchSchema,
      })
      .strict(),
  })
  .strict();

export type CriarBatchRequestSchema = z.infer<
  typeof criarBatchSchema.shape.request
>;
export type CriarBatchResponseSchema = z.infer<
  typeof criarBatchSchema.shape.response
>;
export type CriarBatchParamsSchema = z.infer<
  typeof criarBatchSchema.shape.params
>;

export default criarBatchSchema;
