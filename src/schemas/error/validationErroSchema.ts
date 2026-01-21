import z from "zod";
import erroSchema from "./erroSchema";

const validationErroSchema = erroSchema.extend({
  erro: z
    .literal("Erro na validação dos dados")
    .openapi({ example: "Erro na validação dos dados" }),
  status: z.literal(422).openapi({ example: 422 }),
});

export default validationErroSchema;
