import z from "zod";
import paramUUIDSchema from "../paramUUIDSchema";
import eventoSchema from "./eventoSchema";

const detalhesEventoSchema = z.object({
  params: paramUUIDSchema,
  response: eventoSchema,
});

export type DetalhesEventoResponseSchema = z.infer<
  typeof detalhesEventoSchema.shape.response
>;

export type DetalhesEventoParamsSchema = z.infer<
  typeof detalhesEventoSchema.shape.params
>;

export default detalhesEventoSchema;
