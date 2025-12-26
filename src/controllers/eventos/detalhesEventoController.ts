import { RequestHandler } from "express";
import {
  DetalhesEventoParamsSchema,
  DetalhesEventoResponseSchema,
} from "../../schemas/eventos/detalhesEventoSchema";
import { verificarEventoExistente } from "../../services/eventoService";

const detalhesEvento: RequestHandler<
  DetalhesEventoParamsSchema,
  DetalhesEventoResponseSchema,
  any,
  any
> = async (req, res) => {
  const { id } = req.params;

  const evento = await verificarEventoExistente(id);

  return res.status(200).json(evento);
};

export default detalhesEvento;
