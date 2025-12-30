import z from "zod";
import usuarioSchema from "./usuarioSchema";

const buscarUsuarioSchema = z
  .object({
    response: usuarioSchema,
  })
  .strict();

export type BuscarUsuarioResponseSchema = z.infer<
  typeof buscarUsuarioSchema.shape.response
>;

export default buscarUsuarioSchema;
