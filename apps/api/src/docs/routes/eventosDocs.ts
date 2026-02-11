import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import forbiddenErroSchema from "../../schemas/error/forbiddenErroSchema";
import notFoundErroSchema from "../../schemas/error/notFoundErroSchema";
import servidorErroSchema from "../../schemas/error/servidorErroSchema";
import unauthorizedErroSchema from "../../schemas/error/unauthorizedErroSchema";
import validationErroSchema from "../../schemas/error/validationErroSchema";
import criarEventoSchema from "../../schemas/eventos/criarEventoSchema";
import deletarEventoSchema from "../../schemas/eventos/deletarEventoSchema";
import detalhesEventoSchema from "../../schemas/eventos/detalhesEventoSchema";
import editarEventoSchema from "../../schemas/eventos/editarEventoSchema";
import listarEventosSchema from "../../schemas/eventos/listarEventosSchema";

const eventosRegistry = new OpenAPIRegistry();

const CriarEventoRequestRegister = eventosRegistry.register(
  "CriarEventoRequest",
  criarEventoSchema.shape.request
);
const CriarEventoResponseRegister = eventosRegistry.register(
  "CriarEventoResponse",
  criarEventoSchema.shape.response
);

const DetalhesEventoParamsRegister = eventosRegistry.register(
  "DetalhesEventoParams",
  detalhesEventoSchema.shape.params
);
const DetalhesEventoResponseRegister = eventosRegistry.register(
  "DetalhesEventoResponse",
  detalhesEventoSchema.shape.response
);

const ListarEventosResponseRegister = eventosRegistry.register(
  "ListarEventosResponse",
  listarEventosSchema.shape.response
);

const EditarEventoResponseRegister = eventosRegistry.register(
  "EditarEventoResponse",
  editarEventoSchema.shape.response
);
const EditarEventoRequestRegister = eventosRegistry.register(
  "EditarEventoRequest",
  editarEventoSchema.shape.request
);
const EditarEventoParamsRegister = eventosRegistry.register(
  "EditarEventoParams",
  editarEventoSchema.shape.params
);

const DeletarEventoResponseRegister = eventosRegistry.register(
  "DeletarEventoResponse",
  deletarEventoSchema.shape.response
);
const DeletarEventoParamsRegister = eventosRegistry.register(
  "DeletarEventoParams",
  deletarEventoSchema.shape.params
);

// Criar Evento
eventosRegistry.registerPath({
  method: "post",
  path: "/eventos/",
  tags: ["Eventos"],
  summary: "Cria um novo evento",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": { schema: CriarEventoRequestRegister },
      },
    },
  },
  responses: {
    201: {
      description: "Evento criado",
      content: {
        "application/json": { schema: CriarEventoResponseRegister },
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
  path: "/eventos/:id",
  tags: ["Eventos"],
  summary: "Detalhes evento",
  request: {
    params: DetalhesEventoParamsRegister,
  },
  responses: {
    200: {
      description: "Evento retornado",
      content: {
        "application/json": { schema: DetalhesEventoResponseRegister },
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
    422: {
      description: "Erro na validação dos dados do params",
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

// Listar Eventos
eventosRegistry.registerPath({
  method: "get",
  path: "/eventos/",
  tags: ["Eventos"],
  summary: "Listar todos os eventos ativos",
  responses: {
    200: {
      description: "Eventos ativos retornados",
      content: {
        "application/json": { schema: ListarEventosResponseRegister },
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
  path: "/eventos/:id",
  tags: ["Eventos"],
  summary: "Editar evento",
  security: [{ bearerAuth: [] }],
  request: {
    params: EditarEventoParamsRegister,
    body: {
      content: {
        "application/json": {
          schema: EditarEventoRequestRegister,
        },
      },
    },
  },
  responses: {
    200: {
      description: "Evento atualizado",
      content: {
        "application/json": { schema: EditarEventoResponseRegister },
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
    422: {
      description: "Erro na validação dos dados do params ou body",
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
  path: "/eventos/:id",
  tags: ["Eventos"],
  summary: "Deletar evento",
  security: [{ bearerAuth: [] }],
  request: {
    params: DeletarEventoParamsRegister,
  },
  responses: {
    204: {
      description: "Evento deletado",
      content: {
        "application/json": { schema: DeletarEventoResponseRegister },
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
    422: {
      description: "Erro na validação dos dados do params",
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

export default eventosRegistry;
