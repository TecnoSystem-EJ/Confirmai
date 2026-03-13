import { RequestHandler } from "express";
import { prisma } from "../../../config/database.ts";
import { AppException } from "../../../exceptions/AppException.ts";
import {
  EditarBatchParamsSchema,
  EditarBatchRequestSchema,
  EditarBatchResponseSchema,
} from "../../../schemas/eventos/editarBatchSchema.ts";
import {
  verificarEventoExistente,
  verificarLoteExistente,
  verificarTrocaLoteOrder,
} from "../../../services/eventoService.ts";

const editarBatch: RequestHandler<
  EditarBatchParamsSchema,
  EditarBatchResponseSchema,
  EditarBatchRequestSchema,
  any
> = async (req, res) => {
  const { eventoId, batchId } = req.params;
  const { name, description, startDate, endDate, order, isActive } = req.body;

  // Verifica se o evento existe e pertence ao tenant
  const evento = await verificarEventoExistente(eventoId, req.tenant!.id);

  const loteExistente = await verificarLoteExistente(eventoId, batchId);

  if ((startDate && !endDate) || (!startDate && endDate)) {
    if (startDate && startDate > loteExistente.endDate) {
      throw new AppException(
        "A data de início não pode ser maior que a data do fim do lote.",
        400,
        "Bad Request",
      );
    }

    if (endDate && endDate < loteExistente.startDate) {
      throw new AppException(
        "A data de fim não pode ser maior que a data do início do lote.",
        400,
        "Bad Request",
      );
    }
  }

  if (endDate && endDate > evento.closingDate) {
    throw new AppException(
      "Não é possível alterar a data de encerramento para uma data posterior a data de encerramento do evento.",
      400,
      "Bad Request",
    );
  }

  if (startDate && startDate > evento.startDate) {
    throw new AppException(
      "Não é possível alterar a data de início para uma data posterior a data de início do evento.",
      400,
      "Bad Request",
    );
  }

  if (order) {
    await verificarTrocaLoteOrder(eventoId, order);
  }

  if (isActive && isActive !== loteExistente.isActive) {
    await prisma.batchTicket.updateMany({
      where: {
        batchId,
      },
      data: {
        isActive,
      },
    });
  }

  const batch = await prisma.batch.update({
    where: { id: batchId },
    data: {
      name: name ?? loteExistente.name,
      description: description ?? loteExistente.description,
      startDate: startDate ?? loteExistente.startDate,
      endDate: endDate ?? loteExistente.endDate,
      order: order ?? loteExistente.order,
      isActive: isActive ?? loteExistente.isActive,
    },
  });

  return res.status(200).json({
    mensagem: "Lote atualizado com sucesso!",
    batch,
  });
};

export default editarBatch;
