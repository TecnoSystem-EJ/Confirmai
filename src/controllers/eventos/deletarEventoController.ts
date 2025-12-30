import { RequestHandler } from "express";
import { prisma } from "../../config/database";
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

  await verificarEventoExistente(id);

  await prisma.eventos.update({
    where: {
      id,
    },
    data: {
      status: "encerrado",
    },
  });

  await prisma.inscricoes.updateMany({
    where: {
      eventoId: id,
    },
    data: {
      status: "cancelada",
    },
  });

  return res.status(204).json({ mensagem: "Evento deletado com sucesso" });
};

export default deletarEvento;
