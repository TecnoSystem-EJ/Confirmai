import { Request, Response } from "express";
import { prisma } from "../../config/database";

export async function dashboardInscricoesPorEventoController(
  req: Request,
  res: Response
) {
  const eventoId = Number(req.params.eventoId);

  const totaisPorStatus = await prisma.inscricoes.groupBy({
    by: ["status"],
    where: {
      tenant_id: req.tenant!.id,
      evento_id: eventoId,
    },
    _count: {
      _all: true,
    },
  });

  type StatusInscricao = "pendente" | "confirmada" | "cancelada";

  const response = {
    total: 0,
    porStatus: {
      pendente: 0,
      confirmada: 0,
      cancelada: 0,
    } as Record<StatusInscricao, number>,
  };

  for (const item of totaisPorStatus) {
    const quantidade = item._count._all;
    response.total += quantidade;
    response.porStatus[item.status as StatusInscricao] = quantidade;
  }

  return res.json(response);
}