import { RequestHandler } from "express";
import { NaoEncontradoException } from "../exceptions";

const naoEncontradoMiddleware: RequestHandler<any, any, any, any> = async (
  _req,
  _res,
) => {
  throw new NaoEncontradoException("A rota requisitada não foi encontrada");
};

export default naoEncontradoMiddleware;
