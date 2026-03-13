import { RequestHandler } from "express";
import { prisma } from "../../../config/database.ts";
import { AppException, NaoEncontradoException } from "../../../exceptions";
import {
  DeletarBatchTicketParamsSchema,
  DeletarBatchTicketResponseSchema,
} from "../../../schemas/eventos/deletarBatchTicketSchema.ts";
import {
  verificarEventoExistente,
  verificarLoteExistente,
} from "../../../services/eventoService.ts";

const deletarBatchTicket: RequestHandler<
  DeletarBatchTicketParamsSchema,
  DeletarBatchTicketResponseSchema,
  any,
  any
> = async (req, res) => {
  const { eventoId, batchId, batchTicketId } = req.params;

  await verificarEventoExistente(eventoId, req.tenant!.id);
  await verificarLoteExistente(eventoId, batchId);

  const batchTicketExistente = await prisma.batchTicket.findFirst({
    where: { id: batchTicketId, batchId, batch: { eventId: eventoId } },
  });

  if (!batchTicketExistente) {
    throw new NaoEncontradoException("Ingresso não encontrado.");
  }

  // Verifica se já teve ingressos vendidos deste tipo/lote
  if (batchTicketExistente.soldQuantity > 0) {
    throw new AppException(
      "Não é possível deletar ingressos que já possuem vendas.",
      400,
      "Bad Request",
    );
  }

  await prisma.batchTicket.delete({
    where: { id: batchTicketId },
  });

  return res.status(204).send();
};

export default deletarBatchTicket;
