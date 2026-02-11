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

  await verificarEventoExistente(id, req.tenant!.id);

  await prisma.eventos.update({
    where: {
      id,
      tenantId: req.tenant!.id,
    },
    data: {
      status: "encerrado",
    },
  });

  return res.status(204).json({ mensagem: "Evento deletado com sucesso" });
};

export default deletarEvento;
