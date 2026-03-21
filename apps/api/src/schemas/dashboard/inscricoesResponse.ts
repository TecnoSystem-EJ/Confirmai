import z from "zod";

const dashboardInscricoesSchema = z
  .object({
    total: z
      .number()
      .openapi({
        description: "Total geral de inscrições do tenant",
        example: 65,
      }),

    porStatus: z
      .object({
        pendente: z
          .number()
          .openapi({
            description: "Total de inscrições pendentes",
            example: 10,
          }),

        confirmada: z
          .number()
          .openapi({
            description: "Total de inscrições confirmadas",
            example: 50,
          }),

        cancelada: z
          .number()
          .openapi({
            description: "Total de inscrições canceladas",
            example: 5,
          }),
      })
      .strict()
      .openapi({
        description: "Quantidade de inscrições agrupadas por status",
      }),
      
    taxaConversao: z
    .number()
    .min(0)
    .max(100)
    .openapi({
      description: "Percentual das inscrições confirmadas sobre o total",
      example: 76.92
    })
  })
  .strict();

export default dashboardInscricoesSchema;