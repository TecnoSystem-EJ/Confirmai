import z from "zod";
import paramUUIDSchema from "../paramUUIDSchema";

const exportarInscricoesParaCSVSchema = z.object({
  params: paramUUIDSchema,
  response: z
    .string()
    .openapi({ description: "Arquivo CSV com as inscrições do evento" }),
});

export type ExportarInscricoesParaCSVParamsSchema = z.infer<
  typeof exportarInscricoesParaCSVSchema.shape.params
>;

export type ExportarInscricoesParaCSVResponseSchema = z.infer<
  typeof exportarInscricoesParaCSVSchema.shape.response
>;

export default exportarInscricoesParaCSVSchema;
