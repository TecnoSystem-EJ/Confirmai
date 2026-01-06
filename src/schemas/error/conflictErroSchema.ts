import z from "zod";
import erroSchema from "./erroSchema";

const conflictErroSchema = erroSchema.extend({
  erro: z.literal("Conflict").openapi({ example: "Conflict" }),
  status: z.literal(409).openapi({ example: 409 }),
});

export default conflictErroSchema;
