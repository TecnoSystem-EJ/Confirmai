import z from "zod";
import paramUUIDSchema from "../paramUUIDSchema";
import criarEventoSchema from "./criarEventoSchema";

const editarEventoSchema = z.object({
  params: paramUUIDSchema,
  request: criarEventoSchema.shape.request.partial(),
  response: criarEventoSchema.shape.response.omit({ linkPublico: true }),
});

export type EditarEventoParamsSchema = z.infer<
  typeof editarEventoSchema.shape.params
>;

export type EditarEventoRequestSchema = z.infer<
  typeof editarEventoSchema.shape.request
>;

export type EditarEventoResponseSchema = z.infer<
  typeof editarEventoSchema.shape.response
>;

export default editarEventoSchema;
