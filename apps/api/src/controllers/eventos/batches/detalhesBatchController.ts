import Decimal from "decimal.js";
import { RequestHandler } from "express";
import { prisma } from "../../../config/database.ts";
import {
  DetalhesBatchParamsSchema,
  DetalhesBatchResponseSchema,
} from "../../../schemas/eventos/detalhesBatchSchema.ts";
import {
  verificarEventoExistente,
  verificarLoteExistente,
} from "../../../services/eventoService.ts";
import { calcularPrecoComTaxa } from "../../../services/ingressoService.ts";

const detalhesBatch: RequestHandler<
  DetalhesBatchParamsSchema,
  DetalhesBatchResponseSchema,
  any,
  any
> = async (req, res) => {
  const { eventoId, batchId } = req.params;

  await verificarEventoExistente(eventoId, req.tenant!.id);
  await verificarLoteExistente(eventoId, batchId);

  const batch = await prisma.batch.findFirst({
    where: { id: batchId, eventId: eventoId },
    include: { batchTickets: { include: { ticketType: true } } },
  });

  const batchResponse = {
    ...batch!,
    batchTickets: batch!.batchTickets.map((batchTicket) => ({
      ...batchTicket,
      price: new Decimal(batchTicket.price).toDecimalPlaces(2).toNumber(),
      ...calcularPrecoComTaxa(batchTicket.price),
    })),
  };

  return res.status(200).json(batchResponse);
};

export default detalhesBatch;
