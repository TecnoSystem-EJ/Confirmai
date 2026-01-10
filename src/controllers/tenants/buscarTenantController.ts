import { RequestHandler } from "express";
import { BuscarTenantResponseSchema } from "../../schemas/tenants/buscarTenantSchema";
import { verificarTenantExistente } from "../../services/tenantService";

const buscarTenant: RequestHandler<
  any,
  BuscarTenantResponseSchema,
  any,
  any
> = async (req, res) => {
  const tenant = await verificarTenantExistente(req.tenant!.slug);

  res.status(200).json(tenant);
};

export default buscarTenant;
