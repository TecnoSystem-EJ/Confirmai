import z from "zod";

const batchSchema = z
  .object({
    id: z.uuid().openapi({ description: "ID (UUID) do lote" }),
    eventId: z
      .uuid()
      .openapi({ description: "ID (UUID) do evento ao qual o lote pertence" }),
    name: z
      .string()
      .openapi({ description: "Nome do lote", example: "1º Lote" }),
    description: z.string().nullable().openapi({
      description: "Descrição do lote",
      example: "Lote promocional de lançamento",
    }),
    startDate: z
      .date()
      .openapi({ description: "Data de início das vendas deste lote" }),
    endDate: z
      .date()
      .openapi({ description: "Data de encerramento das vendas deste lote" }),
    order: z
      .number()
      .int()
      .openapi({ description: "Ordem de exibição do lote", example: 1 }),
    isActive: z
      .boolean()
      .openapi({ description: "Se o lote está ativo ou não.", example: true }),
    createdAt: z.date().openapi({ description: "Data de criação do lote" }),
    updatedAt: z.date().openapi({ description: "Data de atualização do lote" }),
  })
  .strict();

export default batchSchema;
