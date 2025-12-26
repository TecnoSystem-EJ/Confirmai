import z from "zod";
import eventoSchema from "../eventos/eventoSchema";
import statusInscricaoEnumSchema from "./statusInscricaoEnumSchema";

const inscricaoSchema = z
  .object({
    id: z.uuid(),
    eventoId: z.uuid(),
    nome: z.string(),
    email: z.email(),
    curso: z.string().nullable(),
    status: statusInscricaoEnumSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    evento: eventoSchema,
  })
  .strict();

export default inscricaoSchema;
