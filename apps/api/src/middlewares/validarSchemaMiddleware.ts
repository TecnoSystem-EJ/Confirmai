import { RequestHandler } from "express";
import z from "zod";
import { AppException } from "../exceptions";

type SchemaType = "PARAMS" | "REQUEST_BODY";

const validarSchemaMiddleware =
  (
    schema: z.ZodObject,
    type: SchemaType
  ): RequestHandler<unknown, any, unknown, any> =>
  async (req, _res, next) => {
    let data;
    if (type === "PARAMS") {
      data = req.params;
    } else if (type === "REQUEST_BODY") {
      data = req.body;
    }

    const result = schema.safeParse(data);

    if (result.error) {
      throw new AppException(
        result.error.issues.map((e) => `${e.code}: ${e.message}`),
        422,
        `Erro de validação do ${type}`
      );
    }

    next();
  };

export default validarSchemaMiddleware;
