import z from "zod";

const ticketTypeSchema = z
  .object({
    id: z
      .string()
      .uuid()
      .openapi({ description: "ID (UUID) do tipo de ingresso" }),
    name: z
      .string()
      .openapi({ description: "Nome do tipo de ingresso", example: "INTEIRA" }),
    description: z.string().nullable().openapi({
      description: "Descrição do tipo de ingresso",
      example: "Ingresso com valor integral",
    }),
    createdAt: z.date().openapi({ description: "Data de criação" }),
    updatedAt: z.date().openapi({ description: "Data de atualização" }),
  })
  .strict();

export default ticketTypeSchema;
