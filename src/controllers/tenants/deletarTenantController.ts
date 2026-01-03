import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { verificarTenantExistente } from "../../services/tenantService";

const deletarTenant: RequestHandler<any, any, any, any> = async (req, res) => {
  const tenant = await verificarTenantExistente(req.tenant!.slug);

  await prisma.tenants.update({
    where: {
      id: tenant.id,
    },
    data: {
      status: "cancelado",
    },
  });

  await prisma.eventos.updateMany({
    where: {
      tenantId: tenant.id,
    },
    data: {
      status: "encerrado",
    },
  });

  res.status(204).send();
};

export default deletarTenant;
