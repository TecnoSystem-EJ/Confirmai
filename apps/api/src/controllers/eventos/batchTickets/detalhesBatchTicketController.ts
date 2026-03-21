import Decimal from "decimal.js";
import { RequestHandler } from "express";
import { prisma } from "../../../config/database.ts";
import { NaoEncontradoException } from "../../../exceptions";
import {
  DetalhesBatchTicketParamsSchema,
  DetalhesBatchTicketResponseSchema,
} from "../../../schemas/eventos/detalhesBatchTicketSchema.ts";
import {
  verificarEventoExistente,
  verificarLoteExistente,
} from "../../../services/eventoService.ts";
import { calcularPrecoComTaxa } from "../../../services/ingressoService.ts";

const detalhesBatchTicket: RequestHandler<
  DetalhesBatchTicketParamsSchema,
  DetalhesBatchTicketResponseSchema,
  any,
  any
> = async (req, res) => {
  const { eventoId, batchId, batchTicketId } = req.params;

  await verificarEventoExistente(eventoId, req.tenant!.id);
  await verificarLoteExistente(eventoId, batchId);

  const batchTicket = await prisma.batchTicket.findFirst({
    where: { id: batchTicketId, batchId, batch: { eventId: eventoId } },
    include: { ticketType: true },
  });

  if (!batchTicket) {
    throw new NaoEncontradoException("Ingresso não encontrado.");
  }

  const batchTicketResponse = {
    ...batchTicket,
    price: new Decimal(batchTicket.price).toDecimalPlaces(2).toNumber(),
    ...calcularPrecoComTaxa(batchTicket.price),
  };

  return res.status(200).json(batchTicketResponse);
};

export default detalhesBatchTicket;
