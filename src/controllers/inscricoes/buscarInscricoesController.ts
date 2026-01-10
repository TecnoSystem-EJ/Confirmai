import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import {
  BuscarInscricoesParamsSchema,
  BuscarInscricoesResponseSchema,
} from "../../schemas/inscricoes/buscarInscricoesSchema";
import { verificarEventoExistente } from "../../services/eventoService";

const buscarInscricoes: RequestHandler<
  BuscarInscricoesParamsSchema,
  BuscarInscricoesResponseSchema,
  any,
  any
> = async (req, res) => {
  const { id: evento_id } = req.params; // pegar id da url de evento

  //verifica se o evento existe
  const evento = await verificarEventoExistente(evento_id, req.tenant!.id);

  //buscar todos os inscritos no evento id fornecido
  const inscricoes = await prisma.inscricoes.findMany({
    where: { eventoId: evento_id, tenantId: req.tenant!.id },
  });

  const response: BuscarInscricoesResponseSchema = {
    evento,
    inscricoes,
  };

  return res.status(200).json(response);
};

export default buscarInscricoes;
