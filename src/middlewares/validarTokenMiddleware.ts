import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../config/constants";
import { NaoAutorizadoException } from "../exceptions";

type JwtPayload = {
  id: string;
  nome: string;
  email: string;
  cargo: "admin" | "membro";
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

  req.user = decoded;

  return next();
};

export default validarTokenMiddleware;
