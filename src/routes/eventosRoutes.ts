import { Router } from "express";
import {
  criarEvento,
  deletarEvento,
  detalhesEvento,
  editarEvento,
  listarEventos,
} from "../controllers/eventos";
import {
  validarSchemaMiddleware,
  validarTokenMiddleware,
} from "../middlewares";
import criarEventoSchema from "../schemas/eventos/criarEventoSchema";
import deletarEventoSchema from "../schemas/eventos/deletarEventoSchema";
import detalhesEventoSchema from "../schemas/eventos/detalhesEventoSchema";
import editarEventoSchema from "../schemas/eventos/editarEventoSchema";

const eventosRoutes = Router({ mergeParams: true });

// Criar evento
eventosRoutes.post(
  "/",
  validarTokenMiddleware,
  validarSchemaMiddleware(criarEventoSchema.shape.request, "REQUEST_BODY"),
  criarEvento
);

// Listar eventos
eventosRoutes.get("/", listarEventos);

// Detalhes de um evento
eventosRoutes.get(
  "/:id",
  validarSchemaMiddleware(detalhesEventoSchema.shape.params, "PARAMS"),
  detalhesEvento
);

// Editar evento
eventosRoutes.put(
  "/:id",
  validarTokenMiddleware,
  validarSchemaMiddleware(editarEventoSchema.shape.params, "PARAMS"),
  validarSchemaMiddleware(editarEventoSchema.shape.request, "REQUEST_BODY"),
  editarEvento
);

// Deletar evento
eventosRoutes.delete(
  "/:id",
  validarTokenMiddleware,
  validarSchemaMiddleware(deletarEventoSchema.shape.params, "PARAMS"),
  deletarEvento
);

export default eventosRoutes;
