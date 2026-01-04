import z from "zod";

const usuarioSchema = z
  .object({
    id: z.uuid(),
    tenantId: z.uuid().nullable(),
    nome: z.string(),
    email: z.email(),
    cargo: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
  })
  .strict();

export default usuarioSchema;
