import { RequestHandler } from "express";
import { prisma } from "../../../config/database.ts";
import {
  CriarBatchTicketParamsSchema,
  CriarBatchTicketRequestSchema,
  CriarBatchTicketResponseSchema,
} from "../../../schemas/eventos/criarBatchTicketSchema.ts";
import {
  verificarEventoExistente,
  verificarLoteExistente,
} from "../../../services/eventoService.js";
import {
  calcularPrecoComTaxa,
  verificarTipoIngressoExistente,
  verificarTipoIngressoExistenteNoLote,
} from "../../../services/ingressoService.ts";

const criarBatchTicket: RequestHandler<
  CriarBatchTicketParamsSchema,
  CriarBatchTicketResponseSchema,
  CriarBatchTicketRequestSchema,
  any
> = async (req, res) => {
  const { eventoId, batchId } = req.params;
  const { ticketTypeId, price, quantity } = req.body;

  await verificarEventoExistente(eventoId, req.tenant!.id);

  await verificarLoteExistente(eventoId, batchId);

  await verificarTipoIngressoExistente(ticketTypeId);

  await verificarTipoIngressoExistenteNoLote(ticketTypeId, batchId);

  const batchTicket = await prisma.batchTicket.create({
    data: {
      batchId,
      ticketTypeId,
      price,
      quantity,
    },
  });

  const batchTicketResponse = {
    ...batchTicket,
    price: batchTicket.price.toDecimalPlaces(2).toNumber(),
    ...calcularPrecoComTaxa(batchTicket.price),
  };

  return res.status(201).json({
    mensagem: "Ticket adicionado ao lote com sucesso!",
    batchTicket: batchTicketResponse,
  });
};

export default criarBatchTicket;
