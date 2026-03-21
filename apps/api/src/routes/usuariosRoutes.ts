import { Router } from "express";
import {
  buscarUsuario,
  buscarUsuarios,
  buscarUsuariosTenant,
  loginUsuario,
  registrarUsuario,
} from "../controllers/usuarios";
import {
  adminRouteMiddleware,
  identificarTenantMiddleware,
  validarSchemaMiddleware,
  validarTokenMiddleware,
} from "../middlewares";
import globalAdminRouteMiddleware from "../middlewares/globalAdminRouteMiddleware";
import paramTenantSlugSchema from "../schemas/tenantSlugParamSchema";
import loginUsuarioSchema from "../schemas/usuarios/loginUsuarioSchema";
import registrarUsuarioSchema from "../schemas/usuarios/registrarUsuarioSchema";

const usuariosRoutes = Router();

usuariosRoutes.post(
  "/auth/register",
  validarSchemaMiddleware(registrarUsuarioSchema.shape.request, "REQUEST_BODY"),
  registrarUsuario,
);

usuariosRoutes.post(
  "/auth/login",
  validarSchemaMiddleware(loginUsuarioSchema.shape.request, "REQUEST_BODY"),
  loginUsuario,
);

usuariosRoutes.get(
  "/all",
  validarTokenMiddleware,
  globalAdminRouteMiddleware,
  buscarUsuarios,
);

usuariosRoutes.get("/me", validarTokenMiddleware, buscarUsuario);

usuariosRoutes.use(
  "/:tenantSlug",
  validarSchemaMiddleware(paramTenantSlugSchema, "PARAMS"),
  identificarTenantMiddleware,
);
usuariosRoutes.get(
  "/:tenantSlug/all",
  validarTokenMiddleware,
  adminRouteMiddleware,
  buscarUsuariosTenant,
);

export default usuariosRoutes;
