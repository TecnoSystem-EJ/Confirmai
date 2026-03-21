import { Request, Response, NextFunction } from "express";
import { prisma } from "../config/database.ts"

export async function verificarEventoDoTenant(
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> {
  const eventoId = Number(req.params.eventoId);

  const evento = await prisma.eventos.findFirst({
    where: {
      id: eventoId,
      tenant_id: req.tenant!.id,
    },
  });

  if (!evento) {
    res.status(404).json({ message: "Evento não encontrado" });
    return;
  }

  next();
}

export default verificarEventoDoTenant;