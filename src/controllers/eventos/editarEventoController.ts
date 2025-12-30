import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import {
  EditarEventoParamsSchema,
  EditarEventoRequestSchema,
  EditarEventoResponseSchema,
} from "../../schemas/eventos/editarEventoSchema";
import { verificarEventoExistente } from "../../services/eventoService";

const editarEvento: RequestHandler<
  EditarEventoParamsSchema,
  EditarEventoResponseSchema,
  EditarEventoRequestSchema,
  any
> = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, closingDate, limiteVagas } = req.body;

  await verificarEventoExistente(id);

  const eventoAtualizado = await prisma.eventos.update({
    where: {
      id,
    },
    data: {
      titulo,
      descricao,
      closingDate,
      limiteVagas,
    },
  });

  return res.json({
    mensagem: "Evento atualizado com sucesso",
    evento: eventoAtualizado,
  });
};

export default editarEvento;
