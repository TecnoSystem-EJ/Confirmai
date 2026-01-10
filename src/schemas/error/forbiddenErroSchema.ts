import z from "zod";
import erroSchema from "./erroSchema";

const forbiddenErroSchema = erroSchema.extend({
  erro: z.literal("Forbidden").openapi({ example: "Forbidden" }),
  status: z.literal(403).openapi({ example: 403 }),
});

export default forbiddenErroSchema;
