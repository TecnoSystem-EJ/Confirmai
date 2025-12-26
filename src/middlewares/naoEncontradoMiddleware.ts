import { RequestHandler } from "express";
import { LidarErroSchema } from "../schemas/error/lidarErroSchema";

const naoEncontradoMiddleware: RequestHandler<
  any,
  LidarErroSchema,
  any,
  any
> = async (req, res) => {
  res.status(404).json({
    erro: "Não encontrado",
    mensagem: "A rota requisitada não foi encontrada",
    metodo: req.method,
    status: 404,
    path: req.path,
    data: new Date().toLocaleString(),
  });
};

export default naoEncontradoMiddleware;
