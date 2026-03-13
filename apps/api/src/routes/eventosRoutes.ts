import { Router } from "express";
import {
  criarBatch,
  criarBatchTicket,
  criarEvento,
  deletarBatch,
  deletarBatchTicket,
  deletarEvento,
  detalhesBatch,
  detalhesBatchTicket,
  detalhesEvento,
  editarBatch,
  editarBatchTicket,
  editarEvento,
  encerrarEvento,
  listarBatches,
  listarBatchTickets,
  listarEventos,
  listarTicketTypes,
} from "../controllers/eventos";
import {
  adminRouteMiddleware,
  validarSchemaMiddleware,
  validarTokenMiddleware,
} from "../middlewares";
import criarBatchSchema from "../schemas/eventos/criarBatchSchema";
import criarBatchTicketSchema from "../schemas/eventos/criarBatchTicketSchema";
import criarEventoSchema from "../schemas/eventos/criarEventoSchema";
import deletarBatchSchema from "../schemas/eventos/deletarBatchSchema";
import deletarBatchTicketSchema from "../schemas/eventos/deletarBatchTicketSchema";
import deletarEventoSchema from "../schemas/eventos/deletarEventoSchema";
import detalhesBatchSchema from "../schemas/eventos/detalhesBatchSchema";
import detalhesBatchTicketSchema from "../schemas/eventos/detalhesBatchTicketSchema";
import detalhesEventoSchema from "../schemas/eventos/detalhesEventoSchema";
import editarBatchSchema from "../schemas/eventos/editarBatchSchema";
import editarBatchTicketSchema from "../schemas/eventos/editarBatchTicketSchema";
import editarEventoSchema from "../schemas/eventos/editarEventoSchema";
import listarBatchesSchema from "../schemas/eventos/listarBatchesSchema";
import listarBatchTicketsSchema from "../schemas/eventos/listarBatchTicketsSchema";

const eventosRoutes = Router({ mergeParams: true });

// Criar evento
eventosRoutes.post(
  "/",
  validarTokenMiddleware,
  adminRouteMiddleware,
  validarSchemaMiddleware(criarEventoSchema.shape.request, "REQUEST_BODY"),
  criarEvento,
);

// Listar eventos
eventosRoutes.get("/", listarEventos);

// === TICKET TYPES ===
eventosRoutes.get("/ticket-types", listarTicketTypes);

// Detalhes de um evento
eventosRoutes.get(
  "/:id",
  validarSchemaMiddleware(detalhesEventoSchema.shape.params, "PARAMS"),
  detalhesEvento,
);

// Editar evento
eventosRoutes.put(
  "/:id",
  validarTokenMiddleware,
  validarSchemaMiddleware(editarEventoSchema.shape.params, "PARAMS"),
  validarSchemaMiddleware(editarEventoSchema.shape.request, "REQUEST_BODY"),
  editarEvento,
);

// Deletar evento
eventosRoutes.delete(
  "/:id",
  validarTokenMiddleware,
  validarSchemaMiddleware(deletarEventoSchema.shape.params, "PARAMS"),
  deletarEvento,
);

// Encerrar evento
eventosRoutes.patch(
  "/:id/encerrar",
  validarTokenMiddleware,
  validarSchemaMiddleware(deletarEventoSchema.shape.params, "PARAMS"),
  encerrarEvento,
);

// === BATCHES (Lotes) ===
eventosRoutes.post(
  "/:eventoId/batches",
  validarTokenMiddleware,
  adminRouteMiddleware,
  validarSchemaMiddleware(criarBatchSchema.shape.params, "PARAMS"),
  validarSchemaMiddleware(criarBatchSchema.shape.request, "REQUEST_BODY"),
  criarBatch,
);

eventosRoutes.get(
  "/:eventoId/batches",
  validarSchemaMiddleware(listarBatchesSchema.shape.params, "PARAMS"),
  listarBatches,
);

eventosRoutes.get(
  "/:eventoId/batches/:batchId",
  validarSchemaMiddleware(detalhesBatchSchema.shape.params, "PARAMS"),
  detalhesBatch,
);

eventosRoutes.put(
  "/:eventoId/batches/:batchId",
  validarTokenMiddleware,
  adminRouteMiddleware,
  validarSchemaMiddleware(editarBatchSchema.shape.params, "PARAMS"),
  validarSchemaMiddleware(editarBatchSchema.shape.request, "REQUEST_BODY"),
  editarBatch,
);

eventosRoutes.delete(
  "/:eventoId/batches/:batchId",
  validarTokenMiddleware,
  validarSchemaMiddleware(deletarBatchSchema.shape.params, "PARAMS"),
  deletarBatch,
);

// === BATCH TICKETS (Ingressos do Lote) ===
eventosRoutes.post(
  "/:eventoId/batches/:batchId/tickets",
  validarTokenMiddleware,
  validarSchemaMiddleware(criarBatchTicketSchema.shape.params, "PARAMS"),
  validarSchemaMiddleware(criarBatchTicketSchema.shape.request, "REQUEST_BODY"),
  criarBatchTicket,
);

eventosRoutes.get(
  "/:eventoId/batches/:batchId/tickets",
  validarSchemaMiddleware(listarBatchTicketsSchema.shape.params, "PARAMS"),
  listarBatchTickets,
);

eventosRoutes.get(
  "/:eventoId/batches/:batchId/tickets/:batchTicketId",
  validarSchemaMiddleware(detalhesBatchTicketSchema.shape.params, "PARAMS"),
  detalhesBatchTicket,
);

eventosRoutes.put(
  "/:eventoId/batches/:batchId/tickets/:batchTicketId",
  validarTokenMiddleware,
  validarSchemaMiddleware(editarBatchTicketSchema.shape.params, "PARAMS"),
  validarSchemaMiddleware(
    editarBatchTicketSchema.shape.request,
    "REQUEST_BODY",
  ),
  editarBatchTicket,
);

eventosRoutes.delete(
  "/:eventoId/batches/:batchId/tickets/:batchTicketId",
  validarTokenMiddleware,
  validarSchemaMiddleware(deletarBatchTicketSchema.shape.params, "PARAMS"),
  deletarBatchTicket,
);

export default eventosRoutes;
