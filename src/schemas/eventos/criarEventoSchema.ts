import * as z from "zod";
import eventoSchema from "./eventoSchema";

const criarEventoSchema = z
  .object({
    request: z
      .object({
        titulo: z
          .string("O título deve ser uma string.")
          .nonempty("O campo 'titulo' é obrigatório.")
          .nonoptional("O campo 'titulo' é obrigatório."),
        descricao: z.string("A descrição deve ser uma string.").optional(),
        closingDate: z.iso
          .date("A data de encerramento deve estar no formato ISO 8601.")
          .nonoptional("O campo 'closing_date' é obrigatório."),
        limiteVagas: z
          .int("O campo 'limiteVagas' deve ser um número insteiro")
          .optional(),
      })
      .strict(),
    response: z
      .object({
        mensagem: z.string(),
        linkPublico: z.string(),
        evento: eventoSchema,
      })
      .strict(),
  })
  .strict();

export type CriarEventoRequestSchema = z.infer<
  typeof criarEventoSchema.shape.request
>;

export type CriarEventoResponseSchema = z.infer<
  typeof criarEventoSchema.shape.response
>;

export default criarEventoSchema;
