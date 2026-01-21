import z from "zod";
import paramUUIDSchema from "../paramUUIDSchema";

const deletarEventoSchema = z.object({
  params: paramUUIDSchema,
  response: z
    .object({
      mensagem: z.string().openapi({
        description: "Mensagem de confirmação da exclusão",
        example: "Evento deletado com sucesso",
      }),
    })
    .strict(),
});

export type DeletarEventoParamsSchema = z.infer<
  typeof deletarEventoSchema.shape.params
>;

export type DeletarEventoResponseSchema = z.infer<
  typeof deletarEventoSchema.shape.response
>;

export default deletarEventoSchema;
