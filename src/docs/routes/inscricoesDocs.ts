import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import conflictErroSchema from "../../schemas/error/conflictErroSchema";
import forbiddenErroSchema from "../../schemas/error/forbiddenErroSchema";
import notFoundErroSchema from "../../schemas/error/notFoundErroSchema";
import servidorErroSchema from "../../schemas/error/servidorErroSchema";
import unauthorizedErroSchema from "../../schemas/error/unauthorizedErroSchema";
import validationErroSchema from "../../schemas/error/validationErroSchema";
import buscarInscricoesSchema from "../../schemas/inscricoes/buscarInscricoesSchema";
import criarInscricaoSchema from "../../schemas/inscricoes/criarInscricaoSchema";
import exportarInscricoesParaCSVSchema from "../../schemas/inscricoes/exportarInscricoesParaCSVSchema";

const inscricoesRegistry = new OpenAPIRegistry();

const CriarInscricaoRequestRegister = inscricoesRegistry.register(
  "CriarInscricaoRequest",
  criarInscricaoSchema.shape.request
);
const CriarInscricaoParamsRegister = inscricoesRegistry.register(
  "CriarInscricaoParams",
  criarInscricaoSchema.shape.params
);
const CriarInscricaoResponseRegister = inscricoesRegistry.register(
  "CriarInscricaoResponse",
  criarInscricaoSchema.shape.response
);

const BuscarInscricoesResponseRegister = inscricoesRegistry.register(
  "BuscarInscricoesResponse",
  buscarInscricoesSchema.shape.response
);
const BuscarInscricoesParamsRegister = inscricoesRegistry.register(
  "BuscarInscricoesParams",
  buscarInscricoesSchema.shape.params
);

const ExportarInscricoesResponseRegister = inscricoesRegistry.register(
  "ExportarInscricoesParaCSVResponse",
  exportarInscricoesParaCSVSchema.shape.response
);
const ExportarInscricoesParamsRegister = inscricoesRegistry.register(
  "ExportarInscricoesParaCSVParams",
  exportarInscricoesParaCSVSchema.shape.params
);

// Inscrever em evento
inscricoesRegistry.registerPath({
  method: "post",
  path: "/inscricoes/:id/inscrever",
  tags: ["Inscrições"],
  summary: "Inscrever em um evento",
  request: {
    body: {
      content: {
        "application/json": { schema: CriarInscricaoRequestRegister },
      },
    },
    params: CriarInscricaoParamsRegister,
  },
  responses: {
    201: {
      description: "Inscrição registrada",
      content: {
        "application/json": { schema: CriarInscricaoResponseRegister },
      },
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema },
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
      description: "Erro na validação dos dados do body ou params",
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

// Buscar Inscrições
inscricoesRegistry.registerPath({
  method: "get",
  path: "/inscricoes/:id/inscricoes",
  tags: ["Inscrições"],
  summary: "Buscar inscrições de um evento",
  security: [{ bearerAuth: [] }],
  request: {
    params: BuscarInscricoesParamsRegister,
  },
  responses: {
    200: {
      description: "CSV de inscrições retornado",
      content: {
        "application/json": { schema: BuscarInscricoesResponseRegister },
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

// Exportar Inscrições para CSV
inscricoesRegistry.registerPath({
  method: "get",
  path: "/inscricoes/:id/inscricoes/export",
  tags: ["Inscrições"],
  summary: "Exportar inscrições de um evento para CSV",
  security: [{ bearerAuth: [] }],
  request: {
    params: ExportarInscricoesParamsRegister,
  },
  responses: {
    200: {
      description: "Inscrições retornadas",
      content: {
        "application/json": { schema: ExportarInscricoesResponseRegister },
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

export default inscricoesRegistry;
