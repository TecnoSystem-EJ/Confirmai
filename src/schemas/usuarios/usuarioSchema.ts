import z from "zod";

const usuarioSchema = z
  .object({
    id: z.uuid().openapi({ description: "ID (UUID) do usuário" }),
    tenantId: z
      .uuid()
      .nullable()
      .openapi({ description: "ID (UUID) da tenant" }),
    nome: z
      .string()
      .openapi({ description: "Nome do usuário", example: "Usuário teste" }),
    email: z
      .email()
      .openapi({
        description: "E-mail do usuário",
        example: "hello@example.com",
      }),
    cargo: z.string().openapi({
      description: "Cargo do Usuário",
      examples: ["admin", "global_admin", "membro"],
    }),
    createdAt: z.date().openapi({ description: "Data de criação" }),
    updatedAt: z.date().openapi({ description: "Data de atualização" }),
  })
  .strict();

export default usuarioSchema;
