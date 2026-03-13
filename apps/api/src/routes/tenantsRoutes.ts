import { Router } from "express";
import {
  buscarTenant,
  buscarTodasTenants,
  criarTenant,
  deletarTenant,
  editarTenant,
} from "../controllers/tenants";
import {
  adminRouteMiddleware,
  identificarTenantMiddleware,
  validarSchemaMiddleware,
  validarTokenMiddleware,
} from "../middlewares";
import globalAdminRouteMiddleware from "../middlewares/globalAdminRouteMiddleware";
import criarTenantSchema from "../schemas/tenants/criarTenantSchema";
import editarTenantSchema from "../schemas/tenants/editarTenantSchema";
import paramTenantSlugSchema from "../schemas/tenantSlugParamSchema";

const tenantsRoutes = Router({ mergeParams: true });

tenantsRoutes.post(
  "/",
  validarSchemaMiddleware(criarTenantSchema.shape.request, "REQUEST_BODY"),
  criarTenant,
);

tenantsRoutes.get(
  "/all",
  validarTokenMiddleware,
  globalAdminRouteMiddleware,
  buscarTodasTenants,
);

tenantsRoutes.use(
  "/:tenantSlug",
  validarSchemaMiddleware(paramTenantSlugSchema, "PARAMS"),
  identificarTenantMiddleware,
);

tenantsRoutes.get("/:tenantSlug/", validarTokenMiddleware, buscarTenant);

tenantsRoutes.put(
  "/:tenantSlug/",
  validarTokenMiddleware,
  adminRouteMiddleware,
  validarSchemaMiddleware(editarTenantSchema.shape.request, "REQUEST_BODY"),
  editarTenant,
);

tenantsRoutes.delete(
  "/:tenantSlug/",
  validarTokenMiddleware,
  adminRouteMiddleware,
  deletarTenant,
);

export default tenantsRoutes;
