import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { ListarEventosResponseSchema } from "../../schemas/eventos/listarEventosSchema";

const listarEventos: RequestHandler<
  any,
  ListarEventosResponseSchema,
  any,
  any
> = async (req, res) => {
  const eventos = await prisma.eventos.findMany({
    where: {
      status: "ativo",
      tenantId: req.tenant!.id,
    },
  });
  return res.status(200).json(eventos);
};

export default listarEventos;
