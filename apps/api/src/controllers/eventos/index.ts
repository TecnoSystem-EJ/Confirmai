import criarEvento from "./criarEventoController";
import deletarEvento from "./deletarEventoController";
import detalhesEvento from "./detalhesEventoController";
import editarEvento from "./editarEventoController";
import listarEventos from "./listarEventosController";

// Batches
import criarBatch from "./batches/criarBatchController";
import deletarBatch from "./batches/deletarBatchController";
import detalhesBatch from "./batches/detalhesBatchController";
import editarBatch from "./batches/editarBatchController";
import listarBatches from "./batches/listarBatchesController";

// Ticket Types
import listarTicketTypes from "./ticketTypes/listarTicketTypesController";

// Batch Tickets
import criarBatchTicket from "./batchTickets/criarBatchTicketController";
import deletarBatchTicket from "./batchTickets/deletarBatchTicketController";
import detalhesBatchTicket from "./batchTickets/detalhesBatchTicketController";
import editarBatchTicket from "./batchTickets/editarBatchTicketController";
import listarBatchTickets from "./batchTickets/listarBatchTicketsController";
import encerrarEvento from "./encerrarEventoController";

export {
  // Batches
  criarBatch,
  // Batch Tickets
  criarBatchTicket,
  // Eventos
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
  // Ticket Types
  listarTicketTypes,
};
