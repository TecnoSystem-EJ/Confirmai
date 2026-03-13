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
          .transform((desc) =>
            desc === undefined || desc === "" ? null : desc,
          )
          .openapi({
            description: "Descrição do evento (opcional)",
            example: "Descrição teste",
          }),
        closingDate: z.iso
          .date("A data de encerramento deve estar no formato ISO 8601.")
          .nonoptional("O campo 'closing_date' é obrigatório.")
          .transform((date) => new Date(date))
          .openapi({
            description: "Data de encerramento do evento",
            example: new Date().toISOString().split("T")[0],
          }),
        startDate: z.iso
          .date("A data de início deve estar no formato ISO 8601.")
          .nonoptional("O campo 'start_date' é obrigatório.")
          .transform((date) => new Date(date))
          .openapi({
            description: "Data de início do evento",
            example: new Date().toISOString().split("T")[0],
          }),
      })
      .refine((data) => data.startDate <= data.closingDate, {
        message:
          "A data de encerramento deve ser maior ou igual a data de início.",
        path: ["closingDate", "startDate"],
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
