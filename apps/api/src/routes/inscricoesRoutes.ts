import { Router } from "express";
import {
  buscarInscricoes,
  criarInscricao,
  exportarInscricoesParaCSV,
  validarCheckin, 
  confirmarCheckin
} from "../controllers/inscricoes";
import {
  validarSchemaMiddleware,
  validarTokenMiddleware,
} from "../middlewares";
import buscarInscricoesSchema from "../schemas/inscricoes/buscarInscricoesSchema";
import criarInscricaoSchema from "../schemas/inscricoes/criarInscricaoSchema";
import exportarInscricoesParaCSVSchema from "../schemas/inscricoes/exportarInscricoesParaCSVSchema";

const inscricoesRoutes = Router();

inscricoesRoutes.post(
  "/:id/inscrever",
  validarSchemaMiddleware(criarInscricaoSchema.shape.params, "PARAMS"),
  validarSchemaMiddleware(criarInscricaoSchema.shape.request, "REQUEST_BODY"),
  criarInscricao
);
inscricoesRoutes.get(
  "/:id/inscricoes",
  validarTokenMiddleware,
  validarSchemaMiddleware(buscarInscricoesSchema.shape.params, "PARAMS"),
  buscarInscricoes
);
inscricoesRoutes.get(
  "/:id/inscricoes/export",
  validarTokenMiddleware,
  validarSchemaMiddleware(
    exportarInscricoesParaCSVSchema.shape.params,
    "PARAMS"
  ),
  exportarInscricoesParaCSV
);

// checar qr code
inscricoesRoutes.post("/checkin/validar", validarCheckin);
inscricoesRoutes.post("/checkin/confirmar", confirmarCheckin);

export default inscricoesRoutes;
