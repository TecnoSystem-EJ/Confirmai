import { RequestHandler } from "express";
import { NaoAutorizadoException, ProibidoException } from "../exceptions";

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
    throw new ProibidoException("Rota exclusiva para admin global");
  }

  next();
};

export default globalAdminRouteMiddleware;
