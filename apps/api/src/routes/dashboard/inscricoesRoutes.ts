import Router from "express";
import validarResponseMiddleware from "../../middlewares/validarResponseMiddleware";
import dashboardInscricoesSchema from "../../schemas/dashboard/inscricoesResponse.ts"
import { validarTokenMiddleware } from "../../middlewares";

import { dashboardInscricoesController } from "../../controllers/dashboard/get_all_inscricoesController";

import { dashboardInscricoesPorEventoController } from "../../controllers/dashboard/get_by_id_inscricoesController";

import { verificarEventoDoTenant } from "../../middlewares/verificarEventoTenantMiddleware.ts";

const dashinscricoes = Router();

dashinscricoes.get(
  "/dashboard/inscricoes",
  validarTokenMiddleware,
  dashboardInscricoesController,
  validarResponseMiddleware(dashboardInscricoesSchema)
);


dashinscricoes.get(
  "/dashboard/eventos/:eventoId/inscricoes",
  validarTokenMiddleware,
  verificarEventoDoTenant,
  dashboardInscricoesPorEventoController,
  validarResponseMiddleware(dashboardInscricoesSchema)
);
