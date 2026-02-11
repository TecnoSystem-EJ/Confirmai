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

const tenantsRoutes = Router({ mergeParams: true });

tenantsRoutes.post(
  "/",
  validarSchemaMiddleware(criarTenantSchema.shape.request, "REQUEST_BODY"),
  criarTenant
);

tenantsRoutes.use(identificarTenantMiddleware);

tenantsRoutes.get("/", validarTokenMiddleware, buscarTenant);

tenantsRoutes.get(
  "/all",
  validarTokenMiddleware,
  globalAdminRouteMiddleware,
  buscarTodasTenants
);

tenantsRoutes.put(
  "/",
  validarTokenMiddleware,
  adminRouteMiddleware,
  validarSchemaMiddleware(editarTenantSchema.shape.request, "REQUEST_BODY"),
  editarTenant
);

tenantsRoutes.delete(
  "/",
  validarTokenMiddleware,
  adminRouteMiddleware,
  deletarTenant
);

export default tenantsRoutes;
