import z from "zod";
import erroSchema from "./erroSchema";

const unauthorizedErroSchema = erroSchema.extend({
  erro: z.literal("Unauthorized").openapi({ example: "Unauthorized" }),
  status: z.literal(401).openapi({ example: 401 }),
});

export default unauthorizedErroSchema;
