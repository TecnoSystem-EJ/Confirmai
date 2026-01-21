import { RequestHandler } from "express";
import { NaoAutorizadoException, ProibidoException } from "../exceptions";

const adminRouteMiddleware: RequestHandler<
  unknown,
  unknown,
  unknown,
  unknown
> = async (req, _res, next) => {
  if (!req.user) {
    throw new NaoAutorizadoException("Usuário não logado");
  }

  const cargo = req.user.cargo;

  if (cargo === "membro") {
    throw new ProibidoException("Rota exclusiva para admin");
  }

  next();
};

export default adminRouteMiddleware;
