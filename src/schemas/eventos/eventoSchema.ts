import z from "zod";

const eventoSchema = z
  .object({
    id: z.uuid(),
    titulo: z.string(),
    descricao: z.string().nullable(),
    linkSlug: z.string(),
    closingDate: z.date(),
    status: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
  .strict();

export default eventoSchema;
