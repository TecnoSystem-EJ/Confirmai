import { RequestHandler } from "express";
import { AppException, NaoAutorizadoException } from "../exceptions";

const globalAdminRouteMiddleware: RequestHandler<
  unknown,
  unknown,
  unknown,
  unknown
> = async (req, _res, next) => {
  if (!req.user) {
    throw new NaoAutorizadoException("Usuário não logado");
  }

  const cargo = req.user.cargo;

  if (cargo !== "global_admin") {
    throw new AppException(
      "Rota exclusiva para admin global",
      403,
      "Forbidden"
    );
  }

  next();
};

export default globalAdminRouteMiddleware;
