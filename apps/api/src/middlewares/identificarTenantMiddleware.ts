import { RequestHandler } from "express";
import { verificarTenantExistente } from "../services/tenantService";

const identificarTenantMiddleware: RequestHandler<any, any, any, any> = async (
  req,
  _res,
  next,
) => {
  const { tenantSlug } = req.params;

  const tenant = await verificarTenantExistente(tenantSlug);

  req.tenant = {
    id: tenant.id,
    nome: tenant.nome,
    slug: tenant.slug,
    status: tenant.status,
  };

  next();
};

export default identificarTenantMiddleware;
