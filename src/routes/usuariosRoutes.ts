import { Router } from "express";
import {
  buscarUsuario,
  buscarUsuarios,
  loginUsuario,
  registrarUsuario,
} from "../controllers/usuarios";
import {
  validarSchemaMiddleware,
  validarTokenMiddleware,
} from "../middlewares";
import globalAdminRouteMiddleware from "../middlewares/globalAdminRouteMiddleware";
import loginUsuarioSchema from "../schemas/usuarios/loginUsuarioSchema";
import registrarUsuarioSchema from "../schemas/usuarios/registrarUsuarioSchema";

const usuariosRoutes = Router();

usuariosRoutes.post(
  "/auth/register",
  validarSchemaMiddleware(registrarUsuarioSchema.shape.request, "REQUEST_BODY"),
  registrarUsuario
);

usuariosRoutes.post(
  "/auth/login",
  validarSchemaMiddleware(loginUsuarioSchema.shape.request, "REQUEST_BODY"),
  loginUsuario
);

usuariosRoutes.get("/me", validarTokenMiddleware, buscarUsuario);

usuariosRoutes.get(
  "/all",
  validarTokenMiddleware,
  globalAdminRouteMiddleware,
  buscarUsuarios
);

export default usuariosRoutes;
