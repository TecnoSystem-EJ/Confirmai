import { ErrorRequestHandler } from "express";
import z from "zod";
import { AppException } from "../exceptions";
import { LidarErroSchema } from "../schemas/error/lidarErroSchema";

const lidarErroMiddleware: ErrorRequestHandler<
  unknown,
  LidarErroSchema,
  unknown,
  unknown
> = async (error, req, res, _next) => {
  console.warn(error);

  const metodo = req.method;
  const path = req.path;
  const data = new Date().toLocaleString();

  if (error instanceof z.ZodError) {
    res.status(422).json({
      erro: "Erro na validação dos dados",
      mensagem: error.issues.map((e) => `${e.code}: ${e.message}`),
      metodo,
      status: 422,
      path,
      data,
    });
    return;
  } else if (error instanceof AppException) {
    res.status(error.status).json({
      erro: error.erro,
      mensagem: error.mensagem,
      metodo,
      status: error.status,
      path,
      data,
    });
    return;
  } else {
    res.status(500).json({
      erro: "Erro interno do servidor",
      mensagem: error,
      metodo,
      status: 500,
      path,
      data,
    });
    return;
  }
};

export default lidarErroMiddleware;
