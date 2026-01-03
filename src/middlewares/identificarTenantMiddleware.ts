import { RequestHandler } from "express";
import { NaoAutorizadoException } from "../exceptions";
import { verificarTenantExistente } from "../services/tenantService";

const identificarTenantMiddleware: RequestHandler<any, any, any, any> = async (
  req,
  _res,
  next
) => {
  const host = req.hostname; // ex: empresa.seuapp.com ou www.empresa.com

  const subdomain = host.split(".")[0]; // empresa de empresa.seuapp.com

  if (!subdomain || subdomain === "www" || subdomain === "api") {
    throw new NaoAutorizadoException(
      "Subdomínio não especificado ou incorreto"
    );
  }

  const tenant = await verificarTenantExistente(subdomain);

  req.tenant = {
    id: tenant.id,
    nome: tenant.nome,
    slug: tenant.slug,
    status: tenant.status,
  };

  next();
};

export default identificarTenantMiddleware;
