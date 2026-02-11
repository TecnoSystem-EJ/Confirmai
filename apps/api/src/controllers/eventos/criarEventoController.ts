import { RequestHandler } from "express";
import { prisma } from "../../config/database.js";
import type {
  CriarEventoRequestSchema,
  CriarEventoResponseSchema,
} from "../../schemas/eventos/criarEventoSchema.ts";
import { generateSlug } from "../../services/eventoService.ts";

const criarEvento: RequestHandler<
  any,
  CriarEventoResponseSchema,
  CriarEventoRequestSchema,
  any
> = async (req, res) => {
  const { titulo, descricao, closingDate, limiteVagas } = req.body;

  const evento = await prisma.eventos.create({
    data: {
      titulo,
      descricao,
      tenantId: req.tenant!.id,
      closingDate: new Date(closingDate),
      limiteVagas: limiteVagas || null,
      linkSlug: generateSlug(titulo),
    },
  });

  return res.status(201).json({
    mensagem: "Evento criado com sucesso!",
    evento,
    linkPublico: `/eventos/${evento.linkSlug}`,
  });
};

export default criarEvento;
