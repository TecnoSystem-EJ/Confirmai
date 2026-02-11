import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import conflictErroSchema from "../../schemas/error/conflictErroSchema";
import forbiddenErroSchema from "../../schemas/error/forbiddenErroSchema";
import notFoundErroSchema from "../../schemas/error/notFoundErroSchema";
import servidorErroSchema from "../../schemas/error/servidorErroSchema";
import unauthorizedErroSchema from "../../schemas/error/unauthorizedErroSchema";
import validationErroSchema from "../../schemas/error/validationErroSchema";
import buscarTenantSchema from "../../schemas/tenants/buscarTenantSchema";
import buscarTodasTenantsSchema from "../../schemas/tenants/buscarTodasTenantsSchema";
import criarTenantSchema from "../../schemas/tenants/criarTenantSchema";
import editarTenantSchema from "../../schemas/tenants/editarTenantSchema";
import eventosRegistry from "./eventosDocs";

const tenantsRegistry = new OpenAPIRegistry();

const CriarTenantRequestRegister = eventosRegistry.register(
  "CriarTenantRequest",
  criarTenantSchema.shape.request
);
const CriarTenantResponseRegister = eventosRegistry.register(
  "CriarTenantResponse",
  criarTenantSchema.shape.response
);

const BuscarTenantResponseRegister = eventosRegistry.register(
  "BuscarTenantResponse",
  buscarTenantSchema.shape.response
);

const BuscarTodasTenantsResponseRegister = eventosRegistry.register(
  "BuscarTodasTenantsResponse",
  buscarTodasTenantsSchema.shape.response
);

const EditarTenantResponseRegister = eventosRegistry.register(
  "EditarTenantResponse",
  editarTenantSchema.shape.response
);
const EditarTenantRequestRegister = eventosRegistry.register(
  "EditarTenantRequest",
  editarTenantSchema.shape.request
);

// Criar Tenant
eventosRegistry.registerPath({
  method: "post",
  path: "/tenants/",
  tags: ["Tenants"],
  summary: "Cria uma nova tenant",
  request: {
    body: {
      content: {
        "application/json": { schema: CriarTenantRequestRegister },
      },
    },
  },
  responses: {
    201: {
      description: "Tenant criada",
      content: {
        "application/json": { schema: CriarTenantResponseRegister },
      },
    },
    409: {
      description: "Conflict",
      content: {
        "application/json": { schema: conflictErroSchema },
      },
    },
    422: {
      description: "Erro na validação dos dados do body",
      content: {
        "application/json": {
          schema: validationErroSchema,
        },
      },
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema,
        },
      },
    },
  },
});

// Detalhes Evento
eventosRegistry.registerPath({
  method: "get",
  path: "/tenants/",
  tags: ["Tenants"],
  summary: "Detalhes tenant",
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Tenant retornada",
      content: {
        "application/json": { schema: BuscarTenantResponseRegister },
      },
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema },
      },
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema },
      },
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema,
        },
      },
    },
  },
});

// Listar Tenants
eventosRegistry.registerPath({
  method: "get",
  path: "/tenants/all",
  tags: ["Tenants"],
  summary: "Listar todos as tenants",
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Tenants retornadas",
      content: {
        "application/json": { schema: BuscarTodasTenantsResponseRegister },
      },
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema },
      },
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema },
      },
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema,
        },
      },
    },
  },
});

// Editar Evento
eventosRegistry.registerPath({
  method: "put",
  path: "/tenants/",
  tags: ["Tenants"],
  summary: "Editar tenant",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": {
          schema: EditarTenantRequestRegister,
        },
      },
    },
  },
  responses: {
    201: {
      description: "Tenant atualizada",
      content: {
        "application/json": { schema: EditarTenantResponseRegister },
      },
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema },
      },
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema },
      },
    },
    409: {
      description: "Conflict",
      content: {
        "application/json": { schema: conflictErroSchema },
      },
    },
    422: {
      description: "Erro na validação dos dados do body",
      content: {
        "application/json": {
          schema: validationErroSchema,
        },
      },
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema,
        },
      },
    },
  },
});

// Deletar Evento
eventosRegistry.registerPath({
  method: "delete",
  path: "/tenants/",
  tags: ["Tenants"],
  summary: "Deletar tenant",
  responses: {
    204: {
      description: "Evento deletado",
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema },
      },
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema },
      },
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema },
      },
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema,
        },
      },
    },
  },
});

export default tenantsRegistry;
