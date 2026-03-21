import Decimal from "decimal.js";
import { RequestHandler } from "express";
import { prisma } from "../../../config/database.ts";
import { AppException, NaoEncontradoException } from "../../../exceptions";
import {
  EditarBatchTicketParamsSchema,
  EditarBatchTicketRequestSchema,
  EditarBatchTicketResponseSchema,
} from "../../../schemas/eventos/editarBatchTicketSchema.ts";
import {
  verificarEventoExistente,
  verificarLoteExistente,
} from "../../../services/eventoService.ts";
import { calcularPrecoComTaxa } from "../../../services/ingressoService.ts";

const editarBatchTicket: RequestHandler<
  EditarBatchTicketParamsSchema,
  EditarBatchTicketResponseSchema,
  EditarBatchTicketRequestSchema,
  any
> = async (req, res) => {
  const { eventoId, batchId, batchTicketId } = req.params;
  const { price, quantity, isActive } = req.body;

  await verificarEventoExistente(eventoId, req.tenant!.id);
  const loteExistente = await verificarLoteExistente(eventoId, batchId);

  const batchTicketExistente = await prisma.batchTicket.findFirst({
    where: { id: batchTicketId, batchId, batch: { eventId: eventoId } },
  });

  if (!batchTicketExistente) {
    throw new NaoEncontradoException("Ingresso não encontrado.");
  }

  if (quantity && quantity < batchTicketExistente.soldQuantity) {
    throw new AppException(
      `A quantidade de ingressos vendidos não pode ser maior que a quantidade total. Já foram vendidos ${batchTicketExistente.soldQuantity} ingressos.`,
      400,
      "Bad Request",
    );
  }

  if (isActive !== null && isActive && !loteExistente.isActive) {
    throw new AppException(
      `Não é permitido ativar um ingresso de um lote desativado.`,
      400,
      "Bad Request",
    );
  }

  const batchTicket = await prisma.batchTicket.update({
    where: { id: batchTicketId },
    data: {
      price: price ?? batchTicketExistente.price,
      quantity: quantity ?? batchTicketExistente.quantity,
      isActive: isActive ?? batchTicketExistente.isActive,
    },
  });

  const batchTicketResponse = {
    ...batchTicket,
    price: new Decimal(batchTicket.price).toDecimalPlaces(2).toNumber(),
    ...calcularPrecoComTaxa(batchTicket.price),
  };

  return res.status(200).json({
    mensagem: "Ticket do lote atualizado com sucesso!",
    batchTicket: batchTicketResponse,
  });
};

export default editarBatchTicket;
