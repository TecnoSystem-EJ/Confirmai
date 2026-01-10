import z from "zod";
import erroSchema from "./erroSchema";

const servidorErroSchema = erroSchema.extend({
  erro: z
    .literal("Erro interno do servidor")
    .openapi({ example: "Erro interno do servidor" }),
  status: z.literal(500).openapi({ example: 500 }),
});

export default servidorErroSchema;
