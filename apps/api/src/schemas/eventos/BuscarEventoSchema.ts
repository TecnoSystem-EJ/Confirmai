import z from "zod";

const buscarEventosSchema = z.object({
  query: z.object({
    search: z.string().trim().min(1).optional(),

    page: z
      .string()
      .regex(/^\d+$/)
      .optional()
      .default("1"),

    limit: z
      .string()
      .regex(/^\d+$/)
      .optional()
      .default("10"),
  }),

  response: z.object({
    data: z.array(
      z.object({
        id: z.number(),
        titulo: z.string(),
        closing_date: z.date(),
        status: z.enum(["ativo", "encerrado", "rascunho"]),
      })
    ),
    total: z.number(),
    page: z.number(),
    limit: z.number(),
  }),
});

export type BuscarEventosQuerySchema = z.infer<
  typeof buscarEventosSchema.shape.query
>;

export type BuscarEventosResponseSchema = z.infer<
  typeof buscarEventosSchema.shape.response
>;

export default buscarEventosSchema;