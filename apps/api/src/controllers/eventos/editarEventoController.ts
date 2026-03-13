import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { AppException } from "../../exceptions";
import {
  EditarEventoParamsSchema,
  EditarEventoRequestSchema,
  EditarEventoResponseSchema,
} from "../../schemas/eventos/editarEventoSchema";
import {
  generateSlug,
  verificarEventoExistente,
} from "../../services/eventoService";

const editarEvento: RequestHandler<
  EditarEventoParamsSchema,
  EditarEventoResponseSchema,
  EditarEventoRequestSchema,
  any
> = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, closingDate, startDate } = req.body;

  const evento = await verificarEventoExistente(id, req.tenant!.id);

  if ((startDate && !closingDate) || (!startDate && closingDate)) {
    if (startDate && startDate > evento.closingDate) {
      throw new AppException(
        "A data de início não pode ser maior que a data do fim do evento.",
        400,
        "Bad Request",
      );
    }

    if (closingDate && closingDate < evento.startDate) {
      throw new AppException(
        "A data de fim não pode ser maior que a data do início do evento.",
        400,
        "Bad Request",
      );
    }
  }

  if (startDate) {
    const maxStartDate = await prisma.batch.aggregate({
      _max: {
        startDate: true,
      },
      where: {
        eventId: id,
      },
    });

    if (
      maxStartDate._max.startDate &&
      new Date(startDate) < maxStartDate._max.startDate
    ) {
      throw new AppException(
        "Não é possível alterar a data de início para uma data anterior ao começo do último lote.",
        400,
        "Bad Request",
      );
    }
  }

  if (closingDate) {
    const maxEndDate = await prisma.batch.aggregate({
      _max: {
        endDate: true,
      },
      where: {
        eventId: id,
      },
    });

    if (
      maxEndDate._max.endDate &&
      maxEndDate._max.endDate > new Date(closingDate)
    ) {
      throw new AppException(
        "Não é possível alterar a data de encerramento para uma data anterior a data de encerramento dos lotes.",
        400,
        "Bad Request",
      );
    }
  }

  const newSlug = titulo ? generateSlug(titulo) : evento.linkSlug;

  const eventoAtualizado = await prisma.eventos.update({
    where: {
      id,
      tenantId: req.tenant!.id,
    },
    data: {
      titulo: titulo || evento.titulo,
      descricao: descricao || evento.descricao,
      startDate: startDate || evento.startDate,
      closingDate: closingDate || evento.closingDate,
      linkSlug: newSlug,
    },
  });

  return res.json({
    mensagem: "Evento atualizado com sucesso",
    evento: eventoAtualizado,
    linkPublico: `/eventos/${eventoAtualizado.linkSlug}`,
  });
};

export default editarEvento;
