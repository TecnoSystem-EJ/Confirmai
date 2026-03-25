import { RequestHandler, Response } from "express";
import { z } from "zod";

const validarResponseMiddleware =
  (schema: z.ZodTypeAny): RequestHandler =>
  (_req, res: Response, next) => {
    const oldJson = res.json.bind(res);

    res.json = ((data: unknown) => {
      schema.parse(data);
      return oldJson(data);
    }) as Response["json"];

    next();
  };

export default validarResponseMiddleware;