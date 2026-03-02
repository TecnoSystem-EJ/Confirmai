import Router from "express";
import validarResponseMiddleware from "../../middlewares/validarResponseMiddleware";
import dashboardInscricoesSchema from "../../schemas/dashboard/inscricoesResponse.ts"
import { validarTokenMiddleware } from "../../middlewares";

import { dashboardInscricoesController } from "../../controllers/dashboard/get_all_inscricoesController";

const dashinscricoes_all_eventos = Router();

dashinscricoes_all_eventos.get(
  "/dashboard/inscricoes",
  validarTokenMiddleware,
  dashboardInscricoesController,
  validarResponseMiddleware(dashboardInscricoesSchema)
);
