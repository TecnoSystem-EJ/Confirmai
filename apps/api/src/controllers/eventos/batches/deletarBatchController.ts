import { RequestHandler } from "express";
import { prisma } from "../../../config/database.ts";
import { AppException } from "../../../exceptions/AppException.ts";
import {
  DeletarBatchParamsSchema,
  DeletarBatchResponseSchema,
} from "../../../schemas/eventos/deletarBatchSchema.ts";
import {
  verificarEventoExistente,
  verificarLoteExistente,
} from "../../../services/eventoService.ts";

const deletarBatch: RequestHandler<
  DeletarBatchParamsSchema,
  DeletarBatchResponseSchema,
  any,
  any
> = async (req, res) => {
  const { eventoId, batchId } = req.params;

  await verificarEventoExistente(eventoId, req.tenant!.id);

  await verificarLoteExistente(eventoId, batchId);

  const SoldedBatchTickets = await prisma.batchTicket.findMany({
    where: { batchId, soldQuantity: { gt: 0 } },
  });

  if (SoldedBatchTickets.length > 0) {
    throw new AppException(
      "Não é possível deletar lotes que já venderam ingressos.",
      400,
      "Bad Request",
    );
  }

  await prisma.batch.delete({
    where: { id: batchId },
  });

  return res.status(204).send();
};

export default deletarBatch;
