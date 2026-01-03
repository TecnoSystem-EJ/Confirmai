import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";
import { NaoAutorizadoException, ProibidoException } from "../exceptions";

type JwtPayload = {
  id: string;
  nome: string;
  email: string;
  cargo: "admin" | "membro" | "global_admin";
  tenant?: {
    id: string;
  };
};

const validarTokenMiddleware: RequestHandler<any, any, any, any> = async (
  req,
  _res,
  next
) => {
  const authHeader = req.headers["authorization"];

  //Verifica se o token foi enviado
  if (!authHeader) throw new NaoAutorizadoException("Token não fornecido");

  //Verifica se o token é válido
  const tokenparts = authHeader.split(" ");
  if (tokenparts.length !== 2) {
    throw new NaoAutorizadoException("Erro no formato do token");
  }

  const [scheme, token] = tokenparts;
  if (!/^Bearer$/i.test(scheme)) {
    throw new NaoAutorizadoException("Token mal formatado");
  }

  const decoded = jwt.verify(token, JWT_SECRET) as JwtPayload;

  if (!decoded) {
    throw new NaoAutorizadoException("Token inválido");
  }

  if (decoded.cargo !== "global_admin") {
    if (!decoded.tenant || !decoded.tenant.id) {
      throw new NaoAutorizadoException("Token mal formatado");
    }

    if (decoded.tenant.id !== req.tenant!.id) {
      throw new ProibidoException("Token de acesso não corresponde a empresa");
    }
  }

  req.user = decoded;

  return next();
};

export default validarTokenMiddleware;
