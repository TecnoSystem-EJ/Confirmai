import { Request, Response } from "express";
import { prisma } from "../../config/database";
import { verificarEventoExistente } from "../../services/eventoService";

export async function dashboardInscricoesPorEventoController(
  req: Request,
  res: Response
) {
  const eventoId = req.params.eventoId;

  await verificarEventoExistente(eventoId, req.tenant!.id)

  // Inscrções por status
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


  // taxa de conversão no momento da request
  const taxaConversao =
  response.total === 0
    ? 0
    : Number((response.porStatus.confirmada / response.total) * 100).toFixed(2);


  // Média da taxa de inscrições por dia
  const inscricoesPorDia = await prisma.$queryRaw<
  { dia: Date; total: bigint; confirmadas: bigint }[]
  >`
    SELECT 
      DATE(created_at) as dia,
      COUNT(*) as total,
      SUM(CASE WHEN status = 'confirmada' THEN 1 ELSE 0 END) as confirmadas
    FROM inscricoes
    WHERE tenant_id = ${req.tenant!.id}
    GROUP BY DATE(created_at)
  `;

  let somaConversoes = 0;

  for (const dia of inscricoesPorDia) {
    const total = Number(dia.total);
    const confirmadas = Number(dia.confirmadas ?? 0);

    const conversao =
      total === 0 ? 0 : (confirmadas / total) * 100;

    somaConversoes += conversao;
  }

  const taxaConversaoMediaDiaria =
    inscricoesPorDia.length === 0
      ? 0
      : Number(
          (somaConversoes / inscricoesPorDia.length).toFixed(2)
        );

    return res.json({
    ...response,
    totaisPorStatus,
    taxaConversao,
    taxaConversaoMediaDiaria,
  });
}