import z from "zod";

const batchTicketSchema = z
  .object({
    id: z
      .uuid()
      .openapi({ description: "ID (UUID) do tipo de ingresso no lote" }),
    batchId: z.uuid().openapi({ description: "ID (UUID) do lote associado" }),
    ticketTypeId: z.uuid().openapi({
      description: "ID (UUID) do tipo de ingresso (ex: VIP, INTEIRA)",
    }),
    price: z
      .number()
      .openapi({ description: "Preço do ingresso", example: 100.0 }),
    quantity: z.number().int().openapi({
      description: "Quantidade total disponibilizada",
      example: 500,
    }),
    soldQuantity: z.number().int().openapi({
      description: "Quantidade de ingressos vendidos",
      example: 50,
    }),
    serviceFee: z
      .number()
      .openapi({ description: "Taxa de serviço", example: 10.0 }),
    priceWithServiceFee: z.number().openapi({
      description: "Preço do ingresso com taxa de serviço",
      example: 110.0,
    }),
    isActive: z
      .boolean()
      .openapi({ description: "Se o lote está ativo ou não.", example: true }),
    createdAt: z.date().openapi({ description: "Data de criação" }),
    updatedAt: z.date().openapi({ description: "Data de atualização" }),
  })
  .strict();

export default batchTicketSchema;
