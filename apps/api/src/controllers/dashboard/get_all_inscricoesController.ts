import { Request, Response } from "express";
import { prisma } from "../../config/database.ts";


export async function dashboardInscricoesController(
  req: Request,
  res: Response,
) {
  const totaisPorStatus = await prisma.inscricoes.groupBy({
    by: ["status"],
    where: {
      tenant_id: req.tenant!.id,
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

  const taxaConversao =
  response.total === 0
    ? 0
    : Number((response.porStatus.confirmada / response.total) * 100).toFixed(2);

    return res.json({...response, taxaConversao,});


}
