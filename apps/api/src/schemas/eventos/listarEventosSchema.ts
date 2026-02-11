import z from "zod";
import eventoSchema from "./eventoSchema";

const listarEventosSchema = z.object({
  response: z.array(eventoSchema),
});

export type ListarEventosResponseSchema = z.infer<
  typeof listarEventosSchema.shape.response
>;

export default listarEventosSchema;
