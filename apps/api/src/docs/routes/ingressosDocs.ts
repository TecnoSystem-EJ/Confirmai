import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";

import forbiddenErroSchema from "../../schemas/error/forbiddenErroSchema";
import notFoundErroSchema from "../../schemas/error/notFoundErroSchema";
import servidorErroSchema from "../../schemas/error/servidorErroSchema";
import unauthorizedErroSchema from "../../schemas/error/unauthorizedErroSchema";
import validationErroSchema from "../../schemas/error/validationErroSchema";

import criarBatchSchema from "../../schemas/eventos/criarBatchSchema";
import deletarBatchSchema from "../../schemas/eventos/deletarBatchSchema";
import detalhesBatchSchema from "../../schemas/eventos/detalhesBatchSchema";
import editarBatchSchema from "../../schemas/eventos/editarBatchSchema";
import listarBatchesSchema from "../../schemas/eventos/listarBatchesSchema";

import listarTicketTypesSchema from "../../schemas/eventos/listarTicketTypesSchema";

import badRequestErroSchema from "../../schemas/error/badRequestErroSchema";
import criarBatchTicketSchema from "../../schemas/eventos/criarBatchTicketSchema";
import deletarBatchTicketSchema from "../../schemas/eventos/deletarBatchTicketSchema";
import detalhesBatchTicketSchema from "../../schemas/eventos/detalhesBatchTicketSchema";
import editarBatchTicketSchema from "../../schemas/eventos/editarBatchTicketSchema";
import listarBatchTicketsSchema from "../../schemas/eventos/listarBatchTicketsSchema";

const ingressosRegistry = new OpenAPIRegistry();

const CriarBatchRequestRegister = ingressosRegistry.register(
  "CriarBatchRequest",
  criarBatchSchema.shape.request,
);
const CriarBatchResponseRegister = ingressosRegistry.register(
  "CriarBatchResponse",
  criarBatchSchema.shape.response,
);
const CriarBatchParamsRegister = ingressosRegistry.register(
  "CriarBatchParams",
  criarBatchSchema.shape.params,
);

const EditarBatchRequestRegister = ingressosRegistry.register(
  "EditarBatchRequest",
  editarBatchSchema.shape.request,
);
const EditarBatchResponseRegister = ingressosRegistry.register(
  "EditarBatchResponse",
  editarBatchSchema.shape.response,
);
const EditarBatchParamsRegister = ingressosRegistry.register(
  "EditarBatchParams",
  editarBatchSchema.shape.params,
);

const DeletarBatchParamsRegister = ingressosRegistry.register(
  "DeletarBatchParams",
  deletarBatchSchema.shape.params,
);

const DetalhesBatchResponseRegister = ingressosRegistry.register(
  "DetalhesBatchResponse",
  detalhesBatchSchema.shape.response,
);
const DetalhesBatchParamsRegister = ingressosRegistry.register(
  "DetalhesBatchParams",
  detalhesBatchSchema.shape.params,
);

const ListarBatchesResponseRegister = ingressosRegistry.register(
  "ListarBatchesResponse",
  listarBatchesSchema.shape.response,
);
const ListarBatchesParamsRegister = ingressosRegistry.register(
  "ListarBatchesParams",
  listarBatchesSchema.shape.params,
);

const ListarTicketTypesResponseRegister = ingressosRegistry.register(
  "ListarTicketTypesResponse",
  listarTicketTypesSchema.shape.response,
);

const CriarBatchTicketRequestRegister = ingressosRegistry.register(
  "CriarBatchTicketRequest",
  criarBatchTicketSchema.shape.request,
);
const CriarBatchTicketResponseRegister = ingressosRegistry.register(
  "CriarBatchTicketResponse",
  criarBatchTicketSchema.shape.response,
);
const CriarBatchTicketParamsRegister = ingressosRegistry.register(
  "CriarBatchTicketParams",
  criarBatchTicketSchema.shape.params,
);

const EditarBatchTicketRequestRegister = ingressosRegistry.register(
  "EditarBatchTicketRequest",
  editarBatchTicketSchema.shape.request,
);
const EditarBatchTicketResponseRegister = ingressosRegistry.register(
  "EditarBatchTicketResponse",
  editarBatchTicketSchema.shape.response,
);
const EditarBatchTicketParamsRegister = ingressosRegistry.register(
  "EditarBatchTicketParams",
  editarBatchTicketSchema.shape.params,
);

const DeletarBatchTicketParamsRegister = ingressosRegistry.register(
  "DeletarBatchTicketParams",
  deletarBatchTicketSchema.shape.params,
);

const DetalhesBatchTicketResponseRegister = ingressosRegistry.register(
  "DetalhesBatchTicketResponse",
  detalhesBatchTicketSchema.shape.response,
);
const DetalhesBatchTicketParamsRegister = ingressosRegistry.register(
  "DetalhesBatchTicketParams",
  detalhesBatchTicketSchema.shape.params,
);

const ListarBatchTicketsResponseRegister = ingressosRegistry.register(
  "ListarBatchTicketsResponse",
  listarBatchTicketsSchema.shape.response,
);
const ListarBatchTicketsParamsRegister = ingressosRegistry.register(
  "ListarBatchTicketsParams",
  listarBatchTicketsSchema.shape.params,
);

const commonResponses = {
  400: {
    description: "Bad Request",
    content: { "application/json": { schema: badRequestErroSchema } },
  },
  401: {
    description: "Unauthorized",
    content: { "application/json": { schema: unauthorizedErroSchema } },
  },
  403: {
    description: "Forbidden",
    content: { "application/json": { schema: forbiddenErroSchema } },
  },
  404: {
    description: "Not Found",
    content: { "application/json": { schema: notFoundErroSchema } },
  },
  500: {
    description: "Erro interno",
    content: { "application/json": { schema: servidorErroSchema } },
  },
};

const validationResponse = {
  422: {
    description: "Erro de validação",
    content: { "application/json": { schema: validationErroSchema } },
  },
};

ingressosRegistry.registerPath({
  method: "post",
  path: "/{tenantSlug}/eventos/{eventoId}/batches",
  tags: ["Lotes"],
  summary: "Cria um novo lote para um evento",
  security: [{ bearerAuth: [] }],
  request: {
    params: CriarBatchParamsRegister,
    body: {
      content: { "application/json": { schema: CriarBatchRequestRegister } },
    },
  },
  responses: {
    201: {
      description: "Lote criado",
      content: { "application/json": { schema: CriarBatchResponseRegister } },
    },
    ...commonResponses,
    ...validationResponse,
  },
});

ingressosRegistry.registerPath({
  method: "get",
  path: "/{tenantSlug}/eventos/{eventoId}/batches",
  tags: ["Lotes"],
  summary: "Lista os lotes de um evento",
  request: { params: ListarBatchesParamsRegister },
  responses: {
    200: {
      description: "Lotes listados",
      content: {
        "application/json": { schema: ListarBatchesResponseRegister },
      },
    },
    ...commonResponses,
    ...validationResponse,
  },
});

ingressosRegistry.registerPath({
  method: "get",
  path: "/{tenantSlug}/eventos/{eventoId}/batches/{batchId}",
  tags: ["Lotes"],
  summary: "Detalhes de um lote",
  request: { params: DetalhesBatchParamsRegister },
  responses: {
    200: {
      description: "Lote encontrado",
      content: {
        "application/json": { schema: DetalhesBatchResponseRegister },
      },
    },
    ...commonResponses,
    ...validationResponse,
  },
});

ingressosRegistry.registerPath({
  method: "put",
  path: "/{tenantSlug}/eventos/{eventoId}/batches/{batchId}",
  tags: ["Lotes"],
  summary: "Editar um lote",
  security: [{ bearerAuth: [] }],
  request: {
    params: EditarBatchParamsRegister,
    body: {
      content: { "application/json": { schema: EditarBatchRequestRegister } },
    },
  },
  responses: {
    200: {
      description: "Lote editado",
      content: { "application/json": { schema: EditarBatchResponseRegister } },
    },
    ...commonResponses,
    ...validationResponse,
  },
});

ingressosRegistry.registerPath({
  method: "delete",
  path: "/{tenantSlug}/eventos/{eventoId}/batches/{batchId}",
  tags: ["Lotes"],
  summary: "Deletar um lote",
  security: [{ bearerAuth: [] }],
  request: { params: DeletarBatchParamsRegister },
  responses: {
    204: {
      description: "Lote deletado",
    },
    ...commonResponses,
    ...validationResponse,
  },
});

ingressosRegistry.registerPath({
  method: "get",
  path: "/{tenantSlug}/eventos/{eventoId}/ticket-types",
  tags: ["Tipos de Ingresso"],
  summary: "Lista os tipos de ingresso de um evento",
  responses: {
    200: {
      description: "Tipos de ingresso listados",
      content: {
        "application/json": { schema: ListarTicketTypesResponseRegister },
      },
    },
    ...commonResponses,
  },
});

ingressosRegistry.registerPath({
  method: "post",
  path: "/{tenantSlug}/eventos/{eventoId}/batches/{batchId}/tickets",
  tags: ["Ingressos do Lote"],
  summary: "Adiciona um ingresso a um lote",
  security: [{ bearerAuth: [] }],
  request: {
    params: CriarBatchTicketParamsRegister,
    body: {
      content: {
        "application/json": { schema: CriarBatchTicketRequestRegister },
      },
    },
  },
  responses: {
    201: {
      description: "Ingresso adicionado",
      content: {
        "application/json": { schema: CriarBatchTicketResponseRegister },
      },
    },
    ...commonResponses,
    ...validationResponse,
  },
});

ingressosRegistry.registerPath({
  method: "get",
  path: "/{tenantSlug}/eventos/{eventoId}/batches/{batchId}/tickets",
  tags: ["Ingressos do Lote"],
  summary: "Lista os ingressos de um lote",
  request: { params: ListarBatchTicketsParamsRegister },
  responses: {
    200: {
      description: "Ingressos listados",
      content: {
        "application/json": { schema: ListarBatchTicketsResponseRegister },
      },
    },
    ...commonResponses,
    ...validationResponse,
  },
});

ingressosRegistry.registerPath({
  method: "get",
  path: "/{tenantSlug}/eventos/{eventoId}/batches/{batchId}/tickets/{batchTicketId}",
  tags: ["Ingressos do Lote"],
  summary: "Detalhes do ingresso de um lote",
  request: { params: DetalhesBatchTicketParamsRegister },
  responses: {
    200: {
      description: "Ingresso encontrado",
      content: {
        "application/json": { schema: DetalhesBatchTicketResponseRegister },
      },
    },
    ...commonResponses,
    ...validationResponse,
  },
});

ingressosRegistry.registerPath({
  method: "put",
  path: "/{tenantSlug}/eventos/{eventoId}/batches/{batchId}/tickets/{batchTicketId}",
  tags: ["Ingressos do Lote"],
  summary: "Editar ingresso de um lote",
  security: [{ bearerAuth: [] }],
  request: {
    params: EditarBatchTicketParamsRegister,
    body: {
      content: {
        "application/json": { schema: EditarBatchTicketRequestRegister },
      },
    },
  },
  responses: {
    200: {
      description: "Ingresso editado",
      content: {
        "application/json": { schema: EditarBatchTicketResponseRegister },
      },
    },
    ...commonResponses,
    ...validationResponse,
  },
});

ingressosRegistry.registerPath({
  method: "delete",
  path: "/{tenantSlug}/eventos/{eventoId}/batches/{batchId}/tickets/{batchTicketId}",
  tags: ["Ingressos do Lote"],
  summary: "Deletar ingresso do lote",
  security: [{ bearerAuth: [] }],
  request: { params: DeletarBatchTicketParamsRegister },
  responses: {
    204: {
      description: "Ingresso deletado",
    },
    ...commonResponses,
    ...validationResponse,
  },
});

export default ingressosRegistry;
