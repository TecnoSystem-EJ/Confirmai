import z from "zod";
import erroSchema from "./erroSchema";

const badRequestErroSchema = erroSchema.extend({
  erro: z.literal("Bad Request").openapi({ example: "Bad Request" }),
  status: z.literal(400).openapi({ example: 400 }),
});

export default badRequestErroSchema;
