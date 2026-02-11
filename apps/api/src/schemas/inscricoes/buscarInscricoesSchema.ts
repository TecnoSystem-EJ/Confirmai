import z from "zod";
import eventoSchema from "../eventos/eventoSchema";
import paramUUIDSchema from "../paramUUIDSchema";
import inscricaoSchema from "./inscricaoSchema";

const buscarInscricoesSchema = z.object({
  params: paramUUIDSchema,
  response: z
    .object({
      evento: eventoSchema,
      inscricoes: z.array(inscricaoSchema.omit({ evento: true })),
    })
    .strict(),
});

export type BuscarInscricoesParamsSchema = z.infer<
  typeof buscarInscricoesSchema.shape.params
>;

export type BuscarInscricoesResponseSchema = z.infer<
  typeof buscarInscricoesSchema.shape.response
>;

export default buscarInscricoesSchema;
