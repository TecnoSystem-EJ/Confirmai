import z from "zod";
import erroSchema from "./erroSchema";

const notFoundErroSchema = erroSchema.extend({
  erro: z.literal("Not Found").openapi({ example: "Not Found" }),
  status: z.literal(404).openapi({ example: 404 }),
});

export default notFoundErroSchema;
