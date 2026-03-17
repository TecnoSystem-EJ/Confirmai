import { RequestHandler } from "express";
import { prisma } from "../../../config/database.ts";
import {
  CriarBatchParamsSchema,
  CriarBatchRequestSchema,
  CriarBatchResponseSchema,
} from "../../../schemas/eventos/criarBatchSchema.ts";
import {
  calcularLoteOrder,
  verificarEventoExistente,
} from "../../../services/eventoService.ts";

const criarBatch: RequestHandler<
  CriarBatchParamsSchema,
  CriarBatchResponseSchema,
  CriarBatchRequestSchema,
  any
> = async (req, res) => {
  const { eventoId: eventId } = req.params;
  const { name, description, startDate, endDate } = req.body;

  // Verifica se o evento existe e pertence ao tenant
  await verificarEventoExistente(eventId, req.tenant!.id);

  const order = await calcularLoteOrder(eventId);

  const batch = await prisma.batch.create({
    data: {
      eventId,
      name,
      description,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      order,
    },
  });

  return res.status(201).json({
    mensagem: "Lote criado com sucesso!",
    batch,
  });
};

export default criarBatch;
