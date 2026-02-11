import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { BuscarTodasTenantsResponseSchema } from "../../schemas/tenants/buscarTodasTenantsSchema";

const buscarTodasTenants: RequestHandler<
  any,
  BuscarTodasTenantsResponseSchema,
  any,
  any
> = async (_req, res) => {
  const tenants = await prisma.tenants.findMany({
    include: {
      _count: {
        select: {
          eventos: true,
        },
      },
    },
  });

  res.status(200).json(tenants);
};

export default buscarTodasTenants;
