import crypto from "crypto";
import * as z from "zod";
import eventoSchema from "./eventoSchema";

const criarEventoSchema = z
  .object({
    request: z
      .object({
        titulo: z
          .string("O título deve ser uma string.")
          .nonempty("O campo 'titulo' é obrigatório.")
          .nonoptional("O campo 'titulo' é obrigatório.")
          .openapi({
            description: "Título de evento",
            example: "Evento teste",
          }),
        descricao: z
          .string("A descrição deve ser uma string.")
          .optional()
          .openapi({
            description: "Descrição do evento (opcional)",
            example: "Descrição teste",
          }),
        closingDate: z.iso
          .date("A data de encerramento deve estar no formato ISO 8601.")
          .nonoptional("O campo 'closing_date' é obrigatório.")
          .openapi({
            description: "Data de encerramento do evento",
            example: new Date().toISOString().split("T")[0],
          }),
        limiteVagas: z
          .int("O campo 'limiteVagas' deve ser um número insteiro")
          .optional()
          .openapi({
            description: "Número limite de vagas do evento (opcional)",
            example: 5,
          }),
      })
      .strict(),
    response: z
      .object({
        mensagem: z.string().openapi({
          example: "Evento criado com sucesso!",
          description: "Mensagem de sucesso da ccriação do evento",
        }),
        linkPublico: z.string().openapi({
          example: `/eventos/evento-teste-${crypto
            .randomBytes(4)
            .toString("hex")}`,
          description: "Path do link público do evento",
        }),
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
