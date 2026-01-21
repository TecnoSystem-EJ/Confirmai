import z from "zod";

const erroSchema = z
  .object({
    erro: z.string().openapi({
      examples: ["Conflict", "Not found", "Unauthorized"],
      description: "Nome do erro",
    }),
    mensagem: z.string().or(z.array(z.string())).openapi({
      description: "Mensagem detalhada do erro",
      example: "Detalhes do erro...",
    }),
    path: z
      .string()
      .openapi({ example: "/api/...", description: "Caminho da requisição" }),
    status: z.number().openapi({
      description: "Código HTTP de resposta",
    }),
    metodo: z.string().openapi({
      examples: ["POST", "GET", "PUT", "DELETE", "PATCH"],
      description: "Método HTTP da requisição",
    }),
    data: z.string().openapi({
      example: new Date().toLocaleString(),
      description: "Data e hora da requisição",
    }),
  })
  .openapi({ description: "Erro" });

export type ErroSchema = z.infer<typeof erroSchema>;

export default erroSchema;
