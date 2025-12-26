import z from "zod";

const paramUUIDSchema = z
  .object({
    id: z
      .uuid("ID do evento inválido")
      .nonempty("ID do evento não pode ser vazio")
      .nonoptional("ID do evento é obrigatório"),
  })
  .strict();

export default paramUUIDSchema;
