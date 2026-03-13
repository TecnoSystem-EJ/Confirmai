import { Request, Response } from "express";
import { prisma } from "../../../config/database.ts";

const listarTicketTypes = async (_req: Request, res: Response) => {
  const ticketTypes = await prisma.ticketType.findMany({
    orderBy: { createdAt: "asc" },
  });

  return res.status(200).json(ticketTypes);
};

export default listarTicketTypes;
