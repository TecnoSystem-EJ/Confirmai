import Decimal from "decimal.js";
import { RequestHandler } from "express";
import { prisma } from "../../../config/database.ts";
import {
  ListarBatchTicketsParamsSchema,
  ListarBatchTicketsResponseSchema,
} from "../../../schemas/eventos/listarBatchTicketsSchema.ts";
import {
  verificarEventoExistente,
  verificarLoteExistente,
} from "../../../services/eventoService.ts";
import { calcularPrecoComTaxa } from "../../../services/ingressoService.ts";

const listarBatchTickets: RequestHandler<
  ListarBatchTicketsParamsSchema,
  ListarBatchTicketsResponseSchema,
  any,
  any
> = async (req, res) => {
  const { eventoId, batchId } = req.params;

  await verificarEventoExistente(eventoId, req.tenant!.id);
  await verificarLoteExistente(eventoId, batchId);

  const batchTickets = await prisma.batchTicket.findMany({
    where: { batchId, batch: { eventId: eventoId } },
    include: { ticketType: true },
    orderBy: { createdAt: "asc" },
  });

  const batchTicketsResponse = batchTickets.map((batchTicket) => ({
    ...batchTicket,
    price: new Decimal(batchTicket.price).toDecimalPlaces(2).toNumber(),
    ...calcularPrecoComTaxa(batchTicket.price),
  }));

  return res.status(200).json(batchTicketsResponse);
};

export default listarBatchTickets;
