import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { AppException } from "../../exceptions";
import {
  DeletarEventoParamsSchema,
  DeletarEventoResponseSchema,
} from "../../schemas/eventos/deletarEventoSchema";
import { verificarEventoExistente } from "../../services/eventoService";

const deletarEvento: RequestHandler<
  DeletarEventoParamsSchema,
  DeletarEventoResponseSchema,
  any,
  any
> = async (req, res) => {
  const { id } = req.params;

  await verificarEventoExistente(id, req.tenant!.id);

  const countTicketsSold = await prisma.batchTicket.count({
    where: {
      soldQuantity: {
        gt: 0,
      },
      batch: {
        eventId: id,
      },
    },
  });

  if (countTicketsSold > 0) {
    throw new AppException(
      "Não é possível deletar eventos que já possuem ingressos vendidos.",
      400,
      "Bad Request",
    );
  }

  await prisma.eventos.delete({
    where: {
      id,
      tenantId: req.tenant!.id,
    },
  });

  return res.status(204).json();
};

export default deletarEvento;
