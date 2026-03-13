import { RequestHandler } from "express";
import { prisma } from "../../../config/database.ts";
import {
  ListarBatchesParamsSchema,
  ListarBatchesResponseSchema,
} from "../../../schemas/eventos/listarBatchesSchema.ts";
import { verificarEventoExistente } from "../../../services/eventoService.ts";

const listarBatches: RequestHandler<
  ListarBatchesParamsSchema,
  ListarBatchesResponseSchema,
  any,
  any
> = async (req, res) => {
  const { eventoId } = req.params;

  await verificarEventoExistente(eventoId, req.tenant!.id);

  const batches = await prisma.batch.findMany({
    where: { eventId: eventoId },
    orderBy: { order: "asc" },
  });

  return res.status(200).json(batches);
};

export default listarBatches;
