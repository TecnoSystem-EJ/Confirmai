import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { AppException } from "../../exceptions";
import {
  DeletarEventoParamsSchema,
  DeletarEventoResponseSchema,
} from "../../schemas/eventos/deletarEventoSchema";
import {
  desativarLotesDeEventoEncerrado,
  verificarEventoExistente,
} from "../../services/eventoService";

const encerrarEvento: RequestHandler<
  DeletarEventoParamsSchema,
  DeletarEventoResponseSchema,
  any,
  any
> = async (req, res) => {
  const { id } = req.params;

  const evento = await verificarEventoExistente(id, req.tenant!.id);

  if (evento.status === "encerrado") {
    throw new AppException(
      "Não é possível encerrar evento já encerrado.",
      400,
      "Bad Request",
    );
  }

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

  if (countTicketsSold > 0 && new Date() < evento.closingDate) {
    throw new AppException(
      "Não é possível encerrar eventos que já possuem ingressos vendidos antes da data de encerramento.",
      400,
      "Bad Request",
    );
  }

  await desativarLotesDeEventoEncerrado(id);

  await prisma.eventos.update({
    where: {
      id,
      tenantId: req.tenant!.id,
    },
    data: {
      status: "encerrado",
    },
  });

  return res.status(200).json({ mensagem: "Evento encerrado com sucesso" });
};

export default encerrarEvento;
