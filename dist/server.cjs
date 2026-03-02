"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));

// src/app.ts
var import_express_api_reference = require("@scalar/express-api-reference");
var import_cors = __toESM(require("cors"), 1);
var import_express6 = __toESM(require("express"), 1);
var import_express_async_errors = require("express-async-errors");

// src/config/constants.ts
var import_dotenv = __toESM(require("dotenv"), 1);
import_dotenv.default.config();
var DATABASE_URL = String(process.env.DATABASE_URL);
var DATABASE_HOST = String(process.env.DATABASE_HOST);
var DATABASE_USER = String(process.env.DATABASE_USER);
var DATABASE_PASSWORD = String(process.env.DATABASE_PASSWORD);
var DATABASE_NAME = String(process.env.DATABASE_NAME);
var DATABASE_PORT = String(process.env.DATABASE_PORT);
var PORT = String(process.env.PORT);
var JWT_SECRET = String(process.env.JWT_SECRET);
var FRONTEND_URL = process.env.NODE_ENV === "development" ? String(process.env.FRONTEND_URL_DEV) : String(process.env.FRONTEND_URL_PROD);
var GLOBAL_ADMIN_SENHA = String(process.env.GLOBAL_ADMIN_SENHA);
var GLOBAL_ADMIN_EMAIL = String(process.env.GLOBAL_ADMIN_EMAIL);
var GLOBAL_ADMIN_NOME = String(process.env.GLOBAL_ADMIN_NOME);

// src/docs/openapi.ts
var import_zod_to_openapi6 = require("@asteasolutions/zod-to-openapi");

// src/config/zodSetup.ts
var import_zod_to_openapi = require("@asteasolutions/zod-to-openapi");
var import_zod = require("zod");
(0, import_zod_to_openapi.extendZodWithOpenApi)(import_zod.z);

// src/docs/routes/eventosDocs.ts
var import_zod_to_openapi2 = require("@asteasolutions/zod-to-openapi");

// src/schemas/error/forbiddenErroSchema.ts
var import_zod3 = __toESM(require("zod"), 1);

// src/schemas/error/erroSchema.ts
var import_zod2 = __toESM(require("zod"), 1);
var erroSchema = import_zod2.default.object({
  erro: import_zod2.default.string().openapi({
    examples: ["Conflict", "Not found", "Unauthorized"],
    description: "Nome do erro"
  }),
  mensagem: import_zod2.default.string().or(import_zod2.default.array(import_zod2.default.string())).openapi({
    description: "Mensagem detalhada do erro",
    example: "Detalhes do erro..."
  }),
  path: import_zod2.default.string().openapi({ example: "/api/...", description: "Caminho da requisi\xE7\xE3o" }),
  status: import_zod2.default.number().openapi({
    description: "C\xF3digo HTTP de resposta"
  }),
  metodo: import_zod2.default.string().openapi({
    examples: ["POST", "GET", "PUT", "DELETE", "PATCH"],
    description: "M\xE9todo HTTP da requisi\xE7\xE3o"
  }),
  data: import_zod2.default.string().openapi({
    example: (/* @__PURE__ */ new Date()).toLocaleString(),
    description: "Data e hora da requisi\xE7\xE3o"
  })
}).openapi({ description: "Erro" });
var erroSchema_default = erroSchema;

// src/schemas/error/forbiddenErroSchema.ts
var forbiddenErroSchema = erroSchema_default.extend({
  erro: import_zod3.default.literal("Forbidden").openapi({ example: "Forbidden" }),
  status: import_zod3.default.literal(403).openapi({ example: 403 })
});
var forbiddenErroSchema_default = forbiddenErroSchema;

// src/schemas/error/notFoundErroSchema.ts
var import_zod4 = __toESM(require("zod"), 1);
var notFoundErroSchema = erroSchema_default.extend({
  erro: import_zod4.default.literal("Not Found").openapi({ example: "Not Found" }),
  status: import_zod4.default.literal(404).openapi({ example: 404 })
});
var notFoundErroSchema_default = notFoundErroSchema;

// src/schemas/error/servidorErroSchema.ts
var import_zod5 = __toESM(require("zod"), 1);
var servidorErroSchema = erroSchema_default.extend({
  erro: import_zod5.default.literal("Erro interno do servidor").openapi({ example: "Erro interno do servidor" }),
  status: import_zod5.default.literal(500).openapi({ example: 500 })
});
var servidorErroSchema_default = servidorErroSchema;

// src/schemas/error/unauthorizedErroSchema.ts
var import_zod6 = __toESM(require("zod"), 1);
var unauthorizedErroSchema = erroSchema_default.extend({
  erro: import_zod6.default.literal("Unauthorized").openapi({ example: "Unauthorized" }),
  status: import_zod6.default.literal(401).openapi({ example: 401 })
});
var unauthorizedErroSchema_default = unauthorizedErroSchema;

// src/schemas/error/validationErroSchema.ts
var import_zod7 = __toESM(require("zod"), 1);
var validationErroSchema = erroSchema_default.extend({
  erro: import_zod7.default.literal("Erro na valida\xE7\xE3o dos dados").openapi({ example: "Erro na valida\xE7\xE3o dos dados" }),
  status: import_zod7.default.literal(422).openapi({ example: 422 })
});
var validationErroSchema_default = validationErroSchema;

// src/schemas/eventos/criarEventoSchema.ts
var import_crypto2 = __toESM(require("crypto"), 1);
var z9 = __toESM(require("zod"), 1);

// src/schemas/eventos/eventoSchema.ts
var import_crypto = __toESM(require("crypto"), 1);
var import_zod8 = __toESM(require("zod"), 1);
var eventoSchema = import_zod8.default.object({
  id: import_zod8.default.uuid().openapi({ description: "ID (UUID) do evento" }),
  titulo: import_zod8.default.string().openapi({ description: "T\xEDtulo do evento", example: "Evento teste" }),
  descricao: import_zod8.default.string().nullable().openapi({
    description: "Descri\xE7\xE3o do evento",
    example: "Descri\xE7\xE3o teste"
  }),
  linkSlug: import_zod8.default.string().openapi({
    description: "Slug do evento",
    example: `evento-teste-${import_crypto.default.randomBytes(4).toString("hex")}`
  }),
  closingDate: import_zod8.default.date().openapi({ description: "Data de encerramento de evento" }),
  status: import_zod8.default.string().openapi({ description: "Status do evento", example: "ativo" }),
  createdAt: import_zod8.default.date().openapi({ description: "Data de cria\xE7\xE3o do evento" }),
  updatedAt: import_zod8.default.date().openapi({ description: "Data de atualiza\xE7\xE3o do evento" })
}).strict();
var eventoSchema_default = eventoSchema;

// src/schemas/eventos/criarEventoSchema.ts
var criarEventoSchema = z9.object({
  request: z9.object({
    titulo: z9.string("O t\xEDtulo deve ser uma string.").nonempty("O campo 'titulo' \xE9 obrigat\xF3rio.").nonoptional("O campo 'titulo' \xE9 obrigat\xF3rio.").openapi({
      description: "T\xEDtulo de evento",
      example: "Evento teste"
    }),
    descricao: z9.string("A descri\xE7\xE3o deve ser uma string.").optional().openapi({
      description: "Descri\xE7\xE3o do evento (opcional)",
      example: "Descri\xE7\xE3o teste"
    }),
    closingDate: z9.iso.date("A data de encerramento deve estar no formato ISO 8601.").nonoptional("O campo 'closing_date' \xE9 obrigat\xF3rio.").openapi({
      description: "Data de encerramento do evento",
      example: (/* @__PURE__ */ new Date()).toISOString().split("T")[0]
    }),
    limiteVagas: z9.int("O campo 'limiteVagas' deve ser um n\xFAmero insteiro").optional().openapi({
      description: "N\xFAmero limite de vagas do evento (opcional)",
      example: 5
    })
  }).strict(),
  response: z9.object({
    mensagem: z9.string().openapi({
      example: "Evento criado com sucesso!",
      description: "Mensagem de sucesso da ccria\xE7\xE3o do evento"
    }),
    linkPublico: z9.string().openapi({
      example: `/eventos/evento-teste-${import_crypto2.default.randomBytes(4).toString("hex")}`,
      description: "Path do link p\xFAblico do evento"
    }),
    evento: eventoSchema_default
  }).strict()
}).strict();
var criarEventoSchema_default = criarEventoSchema;

// src/schemas/eventos/deletarEventoSchema.ts
var import_zod10 = __toESM(require("zod"), 1);

// src/schemas/paramUUIDSchema.ts
var import_zod9 = __toESM(require("zod"), 1);
var paramUUIDSchema = import_zod9.default.object({
  id: import_zod9.default.uuid("ID do evento inv\xE1lido").nonempty("ID do evento n\xE3o pode ser vazio").nonoptional("ID do evento \xE9 obrigat\xF3rio").openapi({ description: "ID (UUID) para busca" })
}).strict();
var paramUUIDSchema_default = paramUUIDSchema;

// src/schemas/eventos/deletarEventoSchema.ts
var deletarEventoSchema = import_zod10.default.object({
  params: paramUUIDSchema_default,
  response: import_zod10.default.object({
    mensagem: import_zod10.default.string().openapi({
      description: "Mensagem de confirma\xE7\xE3o da exclus\xE3o",
      example: "Evento deletado com sucesso"
    })
  }).strict()
});
var deletarEventoSchema_default = deletarEventoSchema;

// src/schemas/eventos/detalhesEventoSchema.ts
var import_zod11 = __toESM(require("zod"), 1);
var detalhesEventoSchema = import_zod11.default.object({
  params: paramUUIDSchema_default,
  response: eventoSchema_default
});
var detalhesEventoSchema_default = detalhesEventoSchema;

// src/schemas/eventos/editarEventoSchema.ts
var import_zod12 = __toESM(require("zod"), 1);
var editarEventoSchema = import_zod12.default.object({
  params: paramUUIDSchema_default,
  request: criarEventoSchema_default.shape.request.partial(),
  response: criarEventoSchema_default.shape.response.omit({ linkPublico: true })
});
var editarEventoSchema_default = editarEventoSchema;

// src/schemas/eventos/listarEventosSchema.ts
var import_zod13 = __toESM(require("zod"), 1);
var listarEventosSchema = import_zod13.default.object({
  response: import_zod13.default.array(eventoSchema_default)
});
var listarEventosSchema_default = listarEventosSchema;

// src/docs/routes/eventosDocs.ts
var eventosRegistry = new import_zod_to_openapi2.OpenAPIRegistry();
var CriarEventoRequestRegister = eventosRegistry.register(
  "CriarEventoRequest",
  criarEventoSchema_default.shape.request
);
var CriarEventoResponseRegister = eventosRegistry.register(
  "CriarEventoResponse",
  criarEventoSchema_default.shape.response
);
var DetalhesEventoParamsRegister = eventosRegistry.register(
  "DetalhesEventoParams",
  detalhesEventoSchema_default.shape.params
);
var DetalhesEventoResponseRegister = eventosRegistry.register(
  "DetalhesEventoResponse",
  detalhesEventoSchema_default.shape.response
);
var ListarEventosResponseRegister = eventosRegistry.register(
  "ListarEventosResponse",
  listarEventosSchema_default.shape.response
);
var EditarEventoResponseRegister = eventosRegistry.register(
  "EditarEventoResponse",
  editarEventoSchema_default.shape.response
);
var EditarEventoRequestRegister = eventosRegistry.register(
  "EditarEventoRequest",
  editarEventoSchema_default.shape.request
);
var EditarEventoParamsRegister = eventosRegistry.register(
  "EditarEventoParams",
  editarEventoSchema_default.shape.params
);
var DeletarEventoResponseRegister = eventosRegistry.register(
  "DeletarEventoResponse",
  deletarEventoSchema_default.shape.response
);
var DeletarEventoParamsRegister = eventosRegistry.register(
  "DeletarEventoParams",
  deletarEventoSchema_default.shape.params
);
eventosRegistry.registerPath({
  method: "post",
  path: "/eventos/",
  tags: ["Eventos"],
  summary: "Cria um novo evento",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": { schema: CriarEventoRequestRegister }
      }
    }
  },
  responses: {
    201: {
      description: "Evento criado",
      content: {
        "application/json": { schema: CriarEventoResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do body",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
eventosRegistry.registerPath({
  method: "get",
  path: "/eventos/:id",
  tags: ["Eventos"],
  summary: "Detalhes evento",
  request: {
    params: DetalhesEventoParamsRegister
  },
  responses: {
    200: {
      description: "Evento retornado",
      content: {
        "application/json": { schema: DetalhesEventoResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do params",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
eventosRegistry.registerPath({
  method: "get",
  path: "/eventos/",
  tags: ["Eventos"],
  summary: "Listar todos os eventos ativos",
  responses: {
    200: {
      description: "Eventos ativos retornados",
      content: {
        "application/json": { schema: ListarEventosResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
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
          schema: EditarEventoRequestRegister
        }
      }
    }
  },
  responses: {
    200: {
      description: "Evento atualizado",
      content: {
        "application/json": { schema: EditarEventoResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do params ou body",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
eventosRegistry.registerPath({
  method: "delete",
  path: "/eventos/:id",
  tags: ["Eventos"],
  summary: "Deletar evento",
  security: [{ bearerAuth: [] }],
  request: {
    params: DeletarEventoParamsRegister
  },
  responses: {
    204: {
      description: "Evento deletado",
      content: {
        "application/json": { schema: DeletarEventoResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do params",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
var eventosDocs_default = eventosRegistry;

// src/docs/routes/inscricoesDocs.ts
var import_zod_to_openapi3 = require("@asteasolutions/zod-to-openapi");

// src/schemas/error/conflictErroSchema.ts
var import_zod14 = __toESM(require("zod"), 1);
var conflictErroSchema = erroSchema_default.extend({
  erro: import_zod14.default.literal("Conflict").openapi({ example: "Conflict" }),
  status: import_zod14.default.literal(409).openapi({ example: 409 })
});
var conflictErroSchema_default = conflictErroSchema;

// src/schemas/inscricoes/buscarInscricoesSchema.ts
var import_zod17 = __toESM(require("zod"), 1);

// src/schemas/inscricoes/inscricaoSchema.ts
var import_zod16 = __toESM(require("zod"), 1);

// src/schemas/inscricoes/statusInscricaoEnumSchema.ts
var import_zod15 = __toESM(require("zod"), 1);
var statusInscricaoEnumSchema = import_zod15.default.enum(
  ["pendente", "confirmada", "cancelada"],
  "O campo 'status' deve ser 'pendente', 'confirmada' ou 'cancelada'"
).nonoptional("O campo 'status' \xE9 obrigat\xF3rio").openapi({
  description: "Status da inscri\xE7\xE3o",
  examples: ["pendente", "confirmada", "cancelada"]
});
var statusInscricaoEnumSchema_default = statusInscricaoEnumSchema;

// src/schemas/inscricoes/inscricaoSchema.ts
var inscricaoSchema = import_zod16.default.object({
  id: import_zod16.default.uuid().openapi({ description: "ID (UUID) da inscri\xE7\xE3o" }),
  eventoId: import_zod16.default.uuid().openapi({ description: "ID (UUID) do evento inscrito" }),
  nome: import_zod16.default.string().openapi({
    description: "Nome do usu\xE1rio inscrito",
    example: "Usu\xE1rio teste"
  }),
  email: import_zod16.default.email().openapi({
    description: "E-mail do usu\xE1rio inscrito",
    example: "hello@example.com"
  }),
  curso: import_zod16.default.string().nullable().openapi({
    description: "Curso do usu\xE1rio inscrito",
    example: "Engenharia de software"
  }),
  status: statusInscricaoEnumSchema_default,
  createdAt: import_zod16.default.date().openapi({ description: "Data da cria\xE7\xE3o" }),
  updatedAt: import_zod16.default.date().openapi({ description: "Data da atualiza\xE7\xE3o" }),
  evento: eventoSchema_default
}).strict();
var inscricaoSchema_default = inscricaoSchema;

// src/schemas/inscricoes/buscarInscricoesSchema.ts
var buscarInscricoesSchema = import_zod17.default.object({
  params: paramUUIDSchema_default,
  response: import_zod17.default.object({
    evento: eventoSchema_default,
    inscricoes: import_zod17.default.array(inscricaoSchema_default.omit({ evento: true }))
  }).strict()
});
var buscarInscricoesSchema_default = buscarInscricoesSchema;

// src/schemas/inscricoes/criarInscricaoSchema.ts
var import_zod18 = __toESM(require("zod"), 1);
var criarInscricaoSchema = import_zod18.default.object({
  params: paramUUIDSchema_default,
  request: import_zod18.default.object({
    nome: import_zod18.default.string("O campo 'nome' deve ser uma string").nonempty("O campo 'nome' n\xE3o pode ser vazio").nonoptional("O campo 'nome' \xE9 obrigat\xF3rio").transform(
      (nome) => nome.trim().replace(/\s+/g, " ").split(" ").map(
        (palavra) => palavra.charAt(0).toUpperCase() + palavra.substring(1)
      ).join(" ")
    ).openapi({
      description: "Nome do usu\xE1rio",
      example: "Usu\xE1rio teste"
    }),
    email: import_zod18.default.email("O campo 'email' deve ser um email v\xE1lido").nonoptional("O campo 'email' \xE9 obrigat\xF3rio").transform((email) => email.trim().toLowerCase()).openapi({
      description: "E-mail do usu\xE1rio",
      example: "hello@example.com"
    }),
    curso: import_zod18.default.string("O campo 'curso' deve ser uma string").nonempty("O campo 'curso' n\xE3o pode ser uma string vazia").optional().openapi({
      description: "Curso do usu\xE1rio",
      example: "Engenharia de software"
    })
  }).strict(),
  response: import_zod18.default.object({
    mensagem: import_zod18.default.string().openapi({
      description: "Mensgaem de sucesso da inscri\xE7\xE3o",
      example: "Inscri\xE7\xE3o realizada com sucesso!"
    }),
    inscricao: inscricaoSchema_default
  }).strict()
});
var criarInscricaoSchema_default = criarInscricaoSchema;

// src/schemas/inscricoes/exportarInscricoesParaCSVSchema.ts
var import_zod19 = __toESM(require("zod"), 1);
var exportarInscricoesParaCSVSchema = import_zod19.default.object({
  params: paramUUIDSchema_default,
  response: import_zod19.default.string().openapi({ description: "Arquivo CSV com as inscri\xE7\xF5es do evento" })
});
var exportarInscricoesParaCSVSchema_default = exportarInscricoesParaCSVSchema;

// src/docs/routes/inscricoesDocs.ts
var inscricoesRegistry = new import_zod_to_openapi3.OpenAPIRegistry();
var CriarInscricaoRequestRegister = inscricoesRegistry.register(
  "CriarInscricaoRequest",
  criarInscricaoSchema_default.shape.request
);
var CriarInscricaoParamsRegister = inscricoesRegistry.register(
  "CriarInscricaoParams",
  criarInscricaoSchema_default.shape.params
);
var CriarInscricaoResponseRegister = inscricoesRegistry.register(
  "CriarInscricaoResponse",
  criarInscricaoSchema_default.shape.response
);
var BuscarInscricoesResponseRegister = inscricoesRegistry.register(
  "BuscarInscricoesResponse",
  buscarInscricoesSchema_default.shape.response
);
var BuscarInscricoesParamsRegister = inscricoesRegistry.register(
  "BuscarInscricoesParams",
  buscarInscricoesSchema_default.shape.params
);
var ExportarInscricoesResponseRegister = inscricoesRegistry.register(
  "ExportarInscricoesParaCSVResponse",
  exportarInscricoesParaCSVSchema_default.shape.response
);
var ExportarInscricoesParamsRegister = inscricoesRegistry.register(
  "ExportarInscricoesParaCSVParams",
  exportarInscricoesParaCSVSchema_default.shape.params
);
inscricoesRegistry.registerPath({
  method: "post",
  path: "/inscricoes/:id/inscrever",
  tags: ["Inscri\xE7\xF5es"],
  summary: "Inscrever em um evento",
  request: {
    body: {
      content: {
        "application/json": { schema: CriarInscricaoRequestRegister }
      }
    },
    params: CriarInscricaoParamsRegister
  },
  responses: {
    201: {
      description: "Inscri\xE7\xE3o registrada",
      content: {
        "application/json": { schema: CriarInscricaoResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    409: {
      description: "Conflict",
      content: {
        "application/json": { schema: conflictErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do body ou params",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
inscricoesRegistry.registerPath({
  method: "get",
  path: "/inscricoes/:id/inscricoes",
  tags: ["Inscri\xE7\xF5es"],
  summary: "Buscar inscri\xE7\xF5es de um evento",
  security: [{ bearerAuth: [] }],
  request: {
    params: BuscarInscricoesParamsRegister
  },
  responses: {
    200: {
      description: "CSV de inscri\xE7\xF5es retornado",
      content: {
        "application/json": { schema: BuscarInscricoesResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do params",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
inscricoesRegistry.registerPath({
  method: "get",
  path: "/inscricoes/:id/inscricoes/export",
  tags: ["Inscri\xE7\xF5es"],
  summary: "Exportar inscri\xE7\xF5es de um evento para CSV",
  security: [{ bearerAuth: [] }],
  request: {
    params: ExportarInscricoesParamsRegister
  },
  responses: {
    200: {
      description: "Inscri\xE7\xF5es retornadas",
      content: {
        "application/json": { schema: ExportarInscricoesResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do params",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
var inscricoesDocs_default = inscricoesRegistry;

// src/docs/routes/tenantsDocs.ts
var import_zod_to_openapi4 = require("@asteasolutions/zod-to-openapi");

// src/schemas/tenants/buscarTenantSchema.ts
var import_zod21 = __toESM(require("zod"), 1);

// src/schemas/tenants/tenantSchema.ts
var import_zod20 = __toESM(require("zod"), 1);
var tenantScehma = import_zod20.default.object({
  id: import_zod20.default.uuid().openapi({ description: "ID (UUID) da tenant" }),
  nome: import_zod20.default.string().openapi({ description: "Nome da tenant", example: "Tenant teste" }),
  slug: import_zod20.default.string().openapi({ description: "Slug da tenant", example: "slug-teste" }),
  email: import_zod20.default.email().openapi({
    description: "E-mail da tenant",
    example: "hello@example.com"
  }),
  cnpj: import_zod20.default.string().openapi({
    description: "CNPJ da tenant",
    example: "XX.XXX.XXX/0001-XX"
  }),
  telefone: import_zod20.default.string().openapi({
    description: "Telefone da tenant",
    example: "(XX) XXXXX-XXXX"
  }),
  logoUrl: import_zod20.default.url().nullable().openapi({
    description: "URL da logo da tenant",
    example: "https://logo.com"
  }),
  site: import_zod20.default.url().nullable().openapi({
    description: "URL do site da tenant",
    example: "https://site-tenant.com"
  }),
  status: import_zod20.default.enum(["ativo", "cancelado", "suspenso"]).openapi({
    description: "Status da tenant",
    examples: ["ativo", "cancelado", "suspenso"]
  }),
  createdAt: import_zod20.default.date().openapi({ description: "Data de cria\xE7\xE3o" }),
  updated_at: import_zod20.default.date().openapi({ description: "Data de atualliza\xE7\xE3o" })
}).strict();
var tenantSchema_default = tenantScehma;

// src/schemas/tenants/buscarTenantSchema.ts
var buscarTenantSchema = import_zod21.default.object({
  response: tenantSchema_default
}).strict();
var buscarTenantSchema_default = buscarTenantSchema;

// src/schemas/tenants/buscarTodasTenantsSchema.ts
var import_zod22 = __toESM(require("zod"), 1);
var buscarTodasTenantsSchema = import_zod22.default.object({
  response: import_zod22.default.array(
    tenantSchema_default.extend({
      _count: import_zod22.default.object({
        eventos: import_zod22.default.int().openapi({
          description: "Contagem de eventos da empresa",
          example: 4
        })
      })
    })
  )
});
var buscarTodasTenantsSchema_default = buscarTodasTenantsSchema;

// src/schemas/tenants/criarTenantSchema.ts
var import_zod24 = __toESM(require("zod"), 1);

// src/services/eventoService.ts
var import_crypto3 = __toESM(require("crypto"), 1);

// src/config/database.ts
var import_adapter_mariadb = require("@prisma/adapter-mariadb");

// generated/prisma/client.ts
var path = __toESM(require("path"), 1);
var import_node_url = require("url");

// generated/prisma/internal/class.ts
var runtime = __toESM(require("@prisma/client/runtime/client"), 1);
var config = {
  "previewFeatures": [],
  "clientVersion": "7.3.0",
  "engineVersion": "9d6ad21cbbceab97458517b147a6a09ff43aa735",
  "activeProvider": "mysql",
  "inlineSchema": '// This is your Prisma schema file,\n// learn more about it in the docs: https://pris.ly/d/prisma-schema\n\n// Looking for ways to speed up your queries, or scale easily with your serverless or edge functions?\n// Try Prisma Accelerate: https://pris.ly/cli/accelerate-init\n\ngenerator client {\n  provider = "prisma-client"\n  output   = "../generated/prisma"\n}\n\ndatasource db {\n  provider = "mysql"\n}\n\n// Defini\xE7\xE3o dos enums\n\nenum EventoStatus {\n  ativo\n  encerrado\n  rascunho\n}\n\nenum CargoUsuario {\n  membro\n  admin\n  global_admin\n}\n\nenum InscricaoStatus {\n  pendente\n  confirmada\n  cancelada\n}\n\nenum TenantStatus {\n  ativo\n  cancelado\n  suspenso\n}\n\n// Defini\xE7\xE3o dos modelos\n\nmodel tenants {\n  id         String       @id @default(uuid())\n  nome       String\n  cnpj       String       @unique @db.VarChar(14)\n  telefone   String       @db.VarChar(20)\n  email      String       @unique\n  site       String?\n  slug       String       @unique // para subdom\xEDnio: empresa.seuapp.com\n  status     TenantStatus @default(ativo) // ativo, suspenso, cancelado\n  createdAt  DateTime     @default(now()) @map("created_at")\n  updated_at DateTime     @updatedAt @map("updated_at")\n\n  // Configura\xE7\xF5es\n  logoUrl String? @map("logo_url")\n\n  // Relacionamentos\n  usuarios   usuarios[]\n  eventos    eventos[]\n  inscricoes inscricoes[]\n}\n\nmodel eventos {\n  id              String       @id @default(uuid())\n  tenantId        String       @map("tenant_id")\n  titulo          String\n  descricao       String?      @db.Text\n  linkSlug        String       @unique @map("link_slug")\n  closingDate     DateTime     @map("closing_date")\n  limiteVagas     Int?         @map("limite_vagas")\n  numeroInscritos Int          @default(0) @map("numero_inscritos")\n  status          EventoStatus @default(rascunho)\n  createdAt       DateTime     @default(now()) @map("created_at")\n  updatedAt       DateTime     @updatedAt @map("updated_at")\n  inscricoes      inscricoes[]\n\n  tenant tenants @relation(fields: [tenantId], references: [id], onDelete: Cascade)\n\n  @@unique([tenantId, linkSlug])\n}\n\nmodel usuarios {\n  id        String       @id @default(uuid())\n  tenantId  String?      @map("tenant_id")\n  nome      String\n  email     String\n  senhaHash String       @map("senha_hash")\n  cargo     CargoUsuario @default(membro)\n  createdAt DateTime     @default(now()) @map("created_at")\n  updatedAt DateTime     @updatedAt @map("updated_at")\n\n  tenant tenants? @relation(fields: [tenantId], references: [id], onDelete: Cascade)\n\n  @@unique([tenantId, email])\n}\n\nmodel inscricoes {\n  id        String          @id @default(uuid())\n  tenantId  String          @map("tenant_id")\n  eventoId  String          @map("evento_id")\n  nome      String\n  email     String\n  curso     String?\n  status    InscricaoStatus @default(pendente)\n  createdAt DateTime        @default(now()) @map("created_at")\n  updatedAt DateTime        @updatedAt @map("updated_at")\n\n  // Relacionamento com a tabela de Eventos\n  evento eventos @relation(fields: [eventoId], references: [id], onDelete: Cascade, onUpdate: Cascade)\n\n  tenant tenants @relation(fields: [tenantId], references: [id], onDelete: Cascade)\n\n  @@unique([tenantId, eventoId, email])\n}\n',
  "runtimeDataModel": {
    "models": {},
    "enums": {},
    "types": {}
  }
};
config.runtimeDataModel = JSON.parse('{"models":{"tenants":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"nome","kind":"scalar","type":"String"},{"name":"cnpj","kind":"scalar","type":"String"},{"name":"telefone","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"site","kind":"scalar","type":"String"},{"name":"slug","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"TenantStatus"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"updated_at","kind":"scalar","type":"DateTime","dbName":"updated_at"},{"name":"logoUrl","kind":"scalar","type":"String","dbName":"logo_url"},{"name":"usuarios","kind":"object","type":"usuarios","relationName":"tenantsTousuarios"},{"name":"eventos","kind":"object","type":"eventos","relationName":"eventosTotenants"},{"name":"inscricoes","kind":"object","type":"inscricoes","relationName":"inscricoesTotenants"}],"dbName":null},"eventos":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"tenantId","kind":"scalar","type":"String","dbName":"tenant_id"},{"name":"titulo","kind":"scalar","type":"String"},{"name":"descricao","kind":"scalar","type":"String"},{"name":"linkSlug","kind":"scalar","type":"String","dbName":"link_slug"},{"name":"closingDate","kind":"scalar","type":"DateTime","dbName":"closing_date"},{"name":"limiteVagas","kind":"scalar","type":"Int","dbName":"limite_vagas"},{"name":"numeroInscritos","kind":"scalar","type":"Int","dbName":"numero_inscritos"},{"name":"status","kind":"enum","type":"EventoStatus"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"updatedAt","kind":"scalar","type":"DateTime","dbName":"updated_at"},{"name":"inscricoes","kind":"object","type":"inscricoes","relationName":"eventosToinscricoes"},{"name":"tenant","kind":"object","type":"tenants","relationName":"eventosTotenants"}],"dbName":null},"usuarios":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"tenantId","kind":"scalar","type":"String","dbName":"tenant_id"},{"name":"nome","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"senhaHash","kind":"scalar","type":"String","dbName":"senha_hash"},{"name":"cargo","kind":"enum","type":"CargoUsuario"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"updatedAt","kind":"scalar","type":"DateTime","dbName":"updated_at"},{"name":"tenant","kind":"object","type":"tenants","relationName":"tenantsTousuarios"}],"dbName":null},"inscricoes":{"fields":[{"name":"id","kind":"scalar","type":"String"},{"name":"tenantId","kind":"scalar","type":"String","dbName":"tenant_id"},{"name":"eventoId","kind":"scalar","type":"String","dbName":"evento_id"},{"name":"nome","kind":"scalar","type":"String"},{"name":"email","kind":"scalar","type":"String"},{"name":"curso","kind":"scalar","type":"String"},{"name":"status","kind":"enum","type":"InscricaoStatus"},{"name":"createdAt","kind":"scalar","type":"DateTime","dbName":"created_at"},{"name":"updatedAt","kind":"scalar","type":"DateTime","dbName":"updated_at"},{"name":"evento","kind":"object","type":"eventos","relationName":"eventosToinscricoes"},{"name":"tenant","kind":"object","type":"tenants","relationName":"inscricoesTotenants"}],"dbName":null}},"enums":{},"types":{}}');
async function decodeBase64AsWasm(wasmBase64) {
  const { Buffer: Buffer2 } = await import("buffer");
  const wasmArray = Buffer2.from(wasmBase64, "base64");
  return new WebAssembly.Module(wasmArray);
}
config.compilerWasm = {
  getRuntime: async () => await import("@prisma/client/runtime/query_compiler_fast_bg.mysql.mjs"),
  getQueryCompilerWasmModule: async () => {
    const { wasm } = await import("@prisma/client/runtime/query_compiler_fast_bg.mysql.wasm-base64.mjs");
    return await decodeBase64AsWasm(wasm);
  },
  importName: "./query_compiler_fast_bg.js"
};
function getPrismaClientClass() {
  return runtime.getPrismaClient(config);
}

// generated/prisma/internal/prismaNamespace.ts
var runtime2 = __toESM(require("@prisma/client/runtime/client"), 1);
var getExtensionContext = runtime2.Extensions.getExtensionContext;
var NullTypes2 = {
  DbNull: runtime2.NullTypes.DbNull,
  JsonNull: runtime2.NullTypes.JsonNull,
  AnyNull: runtime2.NullTypes.AnyNull
};
var TransactionIsolationLevel = runtime2.makeStrictEnum({
  ReadUncommitted: "ReadUncommitted",
  ReadCommitted: "ReadCommitted",
  RepeatableRead: "RepeatableRead",
  Serializable: "Serializable"
});
var defineExtension = runtime2.Extensions.defineExtension;

// generated/prisma/client.ts
var import_meta = {};
globalThis["__dirname"] = path.dirname((0, import_node_url.fileURLToPath)(import_meta.url));
var PrismaClient = getPrismaClientClass();

// src/config/database.ts
var adapter = new import_adapter_mariadb.PrismaMariaDb({
  host: DATABASE_HOST,
  port: Number(DATABASE_PORT),
  user: DATABASE_USER,
  password: DATABASE_PASSWORD,
  database: DATABASE_NAME,
  connectionLimit: 5
});
var prisma = new PrismaClient({ adapter });

// src/exceptions/AppException.ts
var AppException = class extends Error {
  status;
  erro;
  mensagem;
  constructor(mensagem, statusCode, erro) {
    super();
    this.mensagem = mensagem;
    this.status = statusCode;
    this.erro = erro;
    Error.captureStackTrace(this, this.constructor);
  }
};

// src/exceptions/ConflitoException.ts
var ConflitoException = class extends AppException {
  constructor(message) {
    super(message, 409, "Conflict");
  }
};

// src/exceptions/NaoAutorizadoException.ts
var NaoAutorizadoException = class extends AppException {
  constructor(message) {
    super(message, 401, "Unauthorized");
  }
};

// src/exceptions/NaoEncontradoException.ts
var NaoEncontradoException = class extends AppException {
  constructor(mensagem) {
    super(mensagem, 404, "Not Found");
  }
};

// src/exceptions/ProibidoException.ts
var ProibidoException = class extends AppException {
  constructor(message) {
    super(message, 403, "Forbidden");
  }
};

// src/services/eventoService.ts
var generateSlug = (title) => {
  return `${title.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^\w\s-]/g, "").replace(/\s+/g, "-").replace(/-+/g, "-").trim()}-${import_crypto3.default.randomBytes(4).toString("hex")}`;
};
var verificarEventoExistente = async (id, tenantId) => {
  const evento = await prisma.eventos.findUnique({
    where: {
      id,
      tenantId
    }
  });
  if (!evento) {
    throw new NaoEncontradoException("Evento n\xE3o encontrado");
  }
  if (evento.status !== "ativo") {
    throw new NaoAutorizadoException("Evento n\xE3o ativo");
  }
  return evento;
};
var verificarEventoEncerradoOuSemVagas = async (evento) => {
  if (/* @__PURE__ */ new Date() > evento.closingDate || evento.limiteVagas && evento.numeroInscritos >= evento.limiteVagas) {
    if (/* @__PURE__ */ new Date() > evento.closingDate && evento.status === "ativo") {
      await prisma.eventos.update({
        where: { id: evento.id },
        data: {
          status: "encerrado"
        }
      });
    }
    throw new ConflitoException(
      "Evento com inscri\xE7\xF5es encerradas ou sem vagas"
    );
  }
};

// src/services/tenantService.ts
var gerarTenantSlug = (slug) => {
  let endIndex = 7;
  if (FRONTEND_URL?.startsWith("https")) {
    endIndex = 8;
  }
  return FRONTEND_URL.substring(0, endIndex).concat(slug, ".", FRONTEND_URL.substring(endIndex));
};
var verificarCNPJ = (cnpj) => {
  cnpj = cnpj.replace(/[^\d]/g, "");
  if (cnpj.length !== 14) return false;
  if (/^(\d)\1+$/.test(cnpj)) return false;
  const calcDigit = (base, factors) => {
    const sum = base.split("").reduce((acc, digit, i) => acc + Number(digit) * factors[i], 0);
    const rest = sum % 11;
    return rest < 2 ? 0 : 11 - rest;
  };
  const factors1 = [5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const factors2 = [6, 5, 4, 3, 2, 9, 8, 7, 6, 5, 4, 3, 2];
  const base12 = cnpj.slice(0, 12);
  const digit1 = calcDigit(base12, factors1);
  const digit2 = calcDigit(base12 + digit1, factors2);
  return cnpj === base12 + digit1 + digit2;
};
var verificarTenantExistente = async (slug) => {
  const tenant = await prisma.tenants.findUnique({
    where: { slug }
  });
  if (!tenant) {
    throw new NaoEncontradoException("Empresa n\xE3o encontrada");
  }
  if (tenant.status !== "ativo") {
    throw new NaoAutorizadoException("Conta suspensa ou cancelada");
  }
  return tenant;
};

// src/schemas/usuarios/usuarioSchema.ts
var import_zod23 = __toESM(require("zod"), 1);
var usuarioSchema = import_zod23.default.object({
  id: import_zod23.default.uuid().openapi({ description: "ID (UUID) do usu\xE1rio" }),
  tenantId: import_zod23.default.uuid().nullable().openapi({ description: "ID (UUID) da tenant" }),
  nome: import_zod23.default.string().openapi({ description: "Nome do usu\xE1rio", example: "Usu\xE1rio teste" }),
  email: import_zod23.default.email().openapi({
    description: "E-mail do usu\xE1rio",
    example: "hello@example.com"
  }),
  cargo: import_zod23.default.string().openapi({
    description: "Cargo do Usu\xE1rio",
    examples: ["admin", "global_admin", "membro"]
  }),
  createdAt: import_zod23.default.date().openapi({ description: "Data de cria\xE7\xE3o" }),
  updatedAt: import_zod23.default.date().openapi({ description: "Data de atualiza\xE7\xE3o" })
}).strict();
var usuarioSchema_default = usuarioSchema;

// src/schemas/tenants/criarTenantSchema.ts
var criarTenantSchema = import_zod24.default.object({
  request: import_zod24.default.object({
    nome: import_zod24.default.string("O campo 'nome' deve ser uma string").nonempty("O campo 'nome' n\xE3o pode ser vazio").nonoptional("O campo 'nome' \xE9 obrigat\xF3rio").openapi({ description: "Nome da tenant", example: "Tenant teste" }),
    slug: import_zod24.default.string("O campo 'slug' deve ser uma string").nonempty("O campo 'slug' n\xE3o pode ser vazio").nonoptional("O campo 'slug' \xE9 obrigat\xF3rio").openapi({ description: "Slug da tenant", example: "slug-teste" }),
    cnpj: import_zod24.default.string("O campo 'cnpj' deve ser uma string").nonempty("O campo 'cnpj' n\xE3o pode ser vazio").nonoptional("O campo 'cnpj' \xE9 obrigat\xF3rio").refine(
      (cnpj) => {
        return verificarCNPJ(cnpj);
      },
      { error: "Cnpj mal formatado" }
    ).openapi({
      description: "CNPJ da tenant",
      example: "XX.XXX.XXX/0001-XX"
    }),
    telefone: import_zod24.default.string("O campo 'cnpj' deve ser uma string").nonempty("O campo 'cnpj' n\xE3o pode ser vazio").nonoptional("O campo 'cnpj' \xE9 obrigat\xF3rio").refine(
      (cnpj) => {
        return /^(?:\+55\s?)?(?:\(?[1-9][0-9]\)?\s?)?(?:9?\d{4})-?\d{4}$/.test(
          cnpj
        );
      },
      { error: "Telefone mal formatado" }
    ).openapi({
      description: "Telefone da tenant",
      example: "(XX) XXXXX-XXXX"
    }),
    email: import_zod24.default.email("O campo 'email' deve ser um email v\xE1lido").nonoptional("O campo 'email' \xE9 obrigat\xF3rio").transform((email) => email.trim().toLowerCase()).openapi({
      description: "E-mail da tenant",
      example: "hello@example.com"
    }),
    site: import_zod24.default.url("O campo 'site' deve ser uma url v\xE1lida").transform((email) => email.trim().toLowerCase()).optional().openapi({
      description: "URL do site da tenant",
      example: "https://site-tenant.com"
    }),
    logoUrl: import_zod24.default.url("O campo 'logoUrl' deve ser uma url v\xE1lida").transform((logoUrl) => logoUrl.trim().toLowerCase()).optional().openapi({
      description: "URL da logo da tenant",
      example: "https://logo.com"
    }),
    adminNome: import_zod24.default.string("O campo 'nome' deve ser uma string").nonempty("O campo 'nome' n\xE3o pode ser vazio").nonoptional("O campo 'nome' \xE9 obrigat\xF3rio").transform(
      (nome) => nome.trim().replace(/\s+/g, " ").split(" ").map(
        (palavra) => palavra.charAt(0).toUpperCase() + palavra.substring(1)
      ).join(" ")
    ).openapi({
      description: "Nome do usu\xE1rio admin",
      example: "Admin teste"
    }),
    adminEmail: import_zod24.default.email("O campo 'email' deve ser um email v\xE1lido").nonoptional("O campo 'email' \xE9 obrigat\xF3rio").transform((email) => email.trim().toLowerCase()).openapi({
      description: "E-mail do usu\xE1rio",
      example: "hello@example.com"
    }),
    adminSenha: import_zod24.default.string("O campo 'senha' deve ser uma string").min(6, "O campo 'senha' deve ter no m\xEDnimo 6 caracteres").max(20, "O campo 'senha' deve ter no m\xE1ximo 20 caracteres").nonoptional("O campo 'senha' \xE9 obrigat\xF3rio").openapi({
      description: "Senha do usu\xE1rio admin",
      example: "admin123"
    })
  }).strict(),
  response: import_zod24.default.object({
    mensagem: import_zod24.default.string().openapi({
      description: "Mensagem de sucesso da cria\xE7\xE3o",
      example: "Tenant criado com sucesso"
    }),
    tenant: tenantSchema_default,
    admin: usuarioSchema_default,
    acesso_url: import_zod24.default.url().openapi({
      description: "URL de acesso a tenant",
      example: generateSlug("slug-teste")
    })
  }).strict()
});
var criarTenantSchema_default = criarTenantSchema;

// src/schemas/tenants/editarTenantSchema.ts
var import_zod25 = __toESM(require("zod"), 1);
var editarTenantSchema = import_zod25.default.object({
  request: criarTenantSchema_default.shape.request.omit({
    adminEmail: true,
    adminNome: true,
    adminSenha: true
  }).partial(),
  response: import_zod25.default.object({
    mensagem: import_zod25.default.string().openapi({
      description: "Mensagem de sucesso da atualiza\xE7\xE3o",
      example: "Tenant atualizada com sucesso"
    }),
    tenant: tenantSchema_default,
    acesso_url: import_zod25.default.url().openapi({
      description: "URL de acesso a tenant",
      example: generateSlug("slug-teste")
    })
  }).strict()
});
var editarTenantSchema_default = editarTenantSchema;

// src/docs/routes/tenantsDocs.ts
var tenantsRegistry = new import_zod_to_openapi4.OpenAPIRegistry();
var CriarTenantRequestRegister = eventosDocs_default.register(
  "CriarTenantRequest",
  criarTenantSchema_default.shape.request
);
var CriarTenantResponseRegister = eventosDocs_default.register(
  "CriarTenantResponse",
  criarTenantSchema_default.shape.response
);
var BuscarTenantResponseRegister = eventosDocs_default.register(
  "BuscarTenantResponse",
  buscarTenantSchema_default.shape.response
);
var BuscarTodasTenantsResponseRegister = eventosDocs_default.register(
  "BuscarTodasTenantsResponse",
  buscarTodasTenantsSchema_default.shape.response
);
var EditarTenantResponseRegister = eventosDocs_default.register(
  "EditarTenantResponse",
  editarTenantSchema_default.shape.response
);
var EditarTenantRequestRegister = eventosDocs_default.register(
  "EditarTenantRequest",
  editarTenantSchema_default.shape.request
);
eventosDocs_default.registerPath({
  method: "post",
  path: "/tenants/",
  tags: ["Tenants"],
  summary: "Cria uma nova tenant",
  request: {
    body: {
      content: {
        "application/json": { schema: CriarTenantRequestRegister }
      }
    }
  },
  responses: {
    201: {
      description: "Tenant criada",
      content: {
        "application/json": { schema: CriarTenantResponseRegister }
      }
    },
    409: {
      description: "Conflict",
      content: {
        "application/json": { schema: conflictErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do body",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
eventosDocs_default.registerPath({
  method: "get",
  path: "/tenants/",
  tags: ["Tenants"],
  summary: "Detalhes tenant",
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Tenant retornada",
      content: {
        "application/json": { schema: BuscarTenantResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
eventosDocs_default.registerPath({
  method: "get",
  path: "/tenants/all",
  tags: ["Tenants"],
  summary: "Listar todos as tenants",
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Tenants retornadas",
      content: {
        "application/json": { schema: BuscarTodasTenantsResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
eventosDocs_default.registerPath({
  method: "put",
  path: "/tenants/",
  tags: ["Tenants"],
  summary: "Editar tenant",
  security: [{ bearerAuth: [] }],
  request: {
    body: {
      content: {
        "application/json": {
          schema: EditarTenantRequestRegister
        }
      }
    }
  },
  responses: {
    201: {
      description: "Tenant atualizada",
      content: {
        "application/json": { schema: EditarTenantResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    409: {
      description: "Conflict",
      content: {
        "application/json": { schema: conflictErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do body",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
eventosDocs_default.registerPath({
  method: "delete",
  path: "/tenants/",
  tags: ["Tenants"],
  summary: "Deletar tenant",
  responses: {
    204: {
      description: "Evento deletado"
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
var tenantsDocs_default = tenantsRegistry;

// src/docs/routes/usuariosDocs.ts
var import_zod_to_openapi5 = require("@asteasolutions/zod-to-openapi");

// src/schemas/usuarios/buscarUsuarioSchema.ts
var import_zod26 = __toESM(require("zod"), 1);
var buscarUsuarioSchema = import_zod26.default.object({
  response: usuarioSchema_default
}).strict();
var buscarUsuarioSchema_default = buscarUsuarioSchema;

// src/schemas/usuarios/buscarUsuariosSchema.ts
var import_zod27 = __toESM(require("zod"), 1);
var buscarUsuariosSchema = import_zod27.default.object({
  response: import_zod27.default.array(usuarioSchema_default.omit({ tenantId: true })).or(
    usuarioSchema_default.extend({
      tenant: tenantSchema_default.pick({ nome: true, slug: true })
    })
  )
}).strict();
var buscarUsuariosSchema_default = buscarUsuariosSchema;

// src/schemas/usuarios/loginUsuarioSchema.ts
var import_zod28 = __toESM(require("zod"), 1);
var loginUsuarioSchema = import_zod28.default.object({
  request: import_zod28.default.object({
    email: import_zod28.default.email("O campo 'email' deve ser um email v\xE1lido").nonoptional("O campo 'email' \xE9 obrigat\xF3rio").openapi({
      description: "E-mail do usu\xE1rio",
      example: "hello@example.com"
    }),
    senha: import_zod28.default.string("O campo 'senha' deve ser uma string").nonoptional("O campo 'senha' \xE9 obrigat\xF3rio").openapi({
      description: "Senha do usu\xE1rio",
      example: "senha123"
    })
  }).strict(),
  response: import_zod28.default.object({
    token: import_zod28.default.jwt({ alg: "HS256" }).openapi({
      description: "Token do usu\xE1rio v\xE1lido por 1 dia",
      example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiIxMjMiLCJlbWFpbCI6InVzZXJAZXhhbXBsZS5jb20ifQ.fake-signature"
    }),
    usuario: usuarioSchema_default,
    expira_em: import_zod28.default.string().openapi({
      description: "Data de expira\xE7\xE3o do token",
      example: (/* @__PURE__ */ new Date()).toLocaleString()
    })
  })
}).strict();
var loginUsuarioSchema_default = loginUsuarioSchema;

// src/schemas/usuarios/registrarUsuarioSchema.ts
var import_zod30 = __toESM(require("zod"), 1);

// src/schemas/usuarios/cargoUsuarioEnumSchema.ts
var import_zod29 = __toESM(require("zod"), 1);
var cargoUsuarioEnumSchema = import_zod29.default.enum(
  ["admin", "membro", "global_admin"],
  "O campo 'cargo' deve ser 'admin' ou 'membro'"
).nonoptional("O campo 'cargo' \xE9 obrigat\xF3rio");
var cargoUsuarioEnumSchema_default = cargoUsuarioEnumSchema;

// src/schemas/usuarios/registrarUsuarioSchema.ts
var registrarUsuarioSchema = import_zod30.default.object({
  request: import_zod30.default.object({
    nome: import_zod30.default.string("O campo 'nome' deve ser uma string").nonempty("O campo 'nome' n\xE3o pode ser vazio").nonoptional("O campo 'nome' \xE9 obrigat\xF3rio").transform(
      (nome) => nome.trim().replace(/\s+/g, " ").split(" ").map(
        (palavra) => palavra.charAt(0).toUpperCase() + palavra.substring(1)
      ).join(" ")
    ).openapi({ description: "Usu\xE1rio teste", example: "Usu\xE1rio teste" }),
    email: import_zod30.default.email("O campo 'email' deve ser um email v\xE1lido").nonoptional("O campo 'email' \xE9 obrigat\xF3rio").transform((email) => email.trim().toLowerCase()).openapi({
      description: "E-mail do usu\xE1rio",
      example: "hello@example.com"
    }),
    senha: import_zod30.default.string("O campo 'senha' deve ser uma string").min(6, "O campo 'senha' deve ter no m\xEDnimo 6 caracteres").max(20, "O campo 'senha' deve ter no m\xE1ximo 20 caracteres").nonoptional("O campo 'senha' \xE9 obrigat\xF3rio").openapi({
      description: "Senha do usu\xE1rio",
      example: "senha123"
    }),
    cargo: cargoUsuarioEnumSchema_default
  }).strict(),
  response: import_zod30.default.object({
    mensagem: import_zod30.default.string().openapi({
      description: "Mensagem de sucesso da cria\xE7\xE3o",
      example: "Usuario cadastrado com sucesso!"
    }),
    usuario: usuarioSchema_default
  }).strict()
});
var registrarUsuarioSchema_default = registrarUsuarioSchema;

// src/docs/routes/usuariosDocs.ts
var usuariosRegistry = new import_zod_to_openapi5.OpenAPIRegistry();
var RegistrarUsuarioRequestRegister = usuariosRegistry.register(
  "RegistrarUsuarioRequest",
  registrarUsuarioSchema_default.shape.request
);
var RegistrarUsuarioResponseRegister = usuariosRegistry.register(
  "RegistrarUsuarioResponse",
  registrarUsuarioSchema_default.shape.response
);
var LoginUsuarioResponseRegister = usuariosRegistry.register(
  "LoginUsuarioResponse",
  loginUsuarioSchema_default.shape.response
);
var LoginUsuarioRequestRegister = usuariosRegistry.register(
  "LoginUsuarioRequest",
  loginUsuarioSchema_default.shape.request
);
var BuscarUsuarioResponseRegister = usuariosRegistry.register(
  "BuscarUsuarioResponse",
  buscarUsuarioSchema_default.shape.response
);
var BuscarUsuariosResponseRegister = usuariosRegistry.register(
  "BuscarUsuariosResponse",
  buscarUsuariosSchema_default.shape.response
);
usuariosRegistry.registerPath({
  method: "post",
  path: "/usuarios/auth/register",
  tags: ["Usuarios"],
  summary: "Registra um novo usu\xE1rio",
  request: {
    body: {
      content: {
        "application/json": { schema: RegistrarUsuarioRequestRegister }
      }
    }
  },
  responses: {
    201: {
      description: "Usu\xE1rio Registrado",
      content: {
        "application/json": { schema: RegistrarUsuarioResponseRegister }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    409: {
      description: "Conflict",
      content: {
        "application/json": { schema: conflictErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do body",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
usuariosRegistry.registerPath({
  method: "post",
  path: "/usuarios/auth/login",
  tags: ["Usuarios"],
  summary: "Login de um usu\xE1rio",
  request: {
    body: {
      content: {
        "application/json": { schema: LoginUsuarioRequestRegister }
      }
    }
  },
  responses: {
    200: {
      description: "Usu\xE1rio logado",
      content: {
        "application/json": { schema: LoginUsuarioResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    422: {
      description: "Erro na valida\xE7\xE3o dos dados do body",
      content: {
        "application/json": {
          schema: validationErroSchema_default
        }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
usuariosRegistry.registerPath({
  method: "get",
  path: "/usuarios/me",
  tags: ["Usuarios"],
  summary: "Buscar pr\xF3prio usu\xE1rio",
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Usu\xE1rio retornado",
      content: {
        "application/json": { schema: BuscarUsuarioResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
usuariosRegistry.registerPath({
  method: "get",
  path: "/usuarios/all",
  tags: ["Usuarios"],
  summary: "Buscar todos os usu\xE1rios",
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Usu\xE1rios retornados",
      content: {
        "application/json": { schema: BuscarUsuariosResponseRegister }
      }
    },
    401: {
      description: "Unauthorized",
      content: {
        "application/json": { schema: unauthorizedErroSchema_default }
      }
    },
    403: {
      description: "Forbidden",
      content: {
        "application/json": { schema: forbiddenErroSchema_default }
      }
    },
    404: {
      description: "Not Found",
      content: {
        "application/json": { schema: notFoundErroSchema_default }
      }
    },
    500: {
      description: "Erro interno do servidor",
      content: {
        "application/json": {
          schema: servidorErroSchema_default
        }
      }
    }
  }
});
var usuariosDocs_default = usuariosRegistry;

// src/docs/openapi.ts
var globalRegistry = new import_zod_to_openapi6.OpenAPIRegistry([
  eventosDocs_default,
  usuariosDocs_default,
  tenantsDocs_default,
  inscricoesDocs_default
]);
globalRegistry.registerComponent("securitySchemes", "bearerAuth", {
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT",
  description: "Insira o token JWT para autentica\xE7\xE3o"
});
var generateOpenAPI = () => {
  const generator = new import_zod_to_openapi6.OpenApiGeneratorV3(globalRegistry.definitions);
  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "Confirma a\xED",
      version: "1.0.0",
      description: "API de Gerenciamento de Eventos baseado em SAAS. Esta API utiliza arquitetura multi-tenant baseada em subdom\xEDnios."
    },
    servers: [
      {
        url: "http://{tenant}.lvh.me:3000/api",
        // Para desenvolvimento
        description: "Servidor de Desenvolvimento",
        variables: {
          tenant: {
            default: "empresa1",
            description: "O slug do tenant (subdom\xEDnio)"
          }
        }
      }
      /* {
        url: "https://{tenant}.seudominio.com/api", // Para produção
        description: "Servidor de Produção",
        variables: {
          tenant: {
            default: "api",
            description: "Subdomínio da empresa",
          },
        },
      }, */
    ]
  });
};

// src/middlewares/adminRouteMiddleware.ts
var adminRouteMiddleware = async (req, _res, next) => {
  if (!req.user) {
    throw new NaoAutorizadoException("Usu\xE1rio n\xE3o logado");
  }
  const cargo = req.user.cargo;
  if (cargo === "membro") {
    throw new ProibidoException("Rota exclusiva para admin");
  }
  next();
};
var adminRouteMiddleware_default = adminRouteMiddleware;

// src/middlewares/identificarTenantMiddleware.ts
var identificarTenantMiddleware = async (req, _res, next) => {
  const host = req.hostname;
  const subdomain = host.split(".")[0];
  const tenant = await verificarTenantExistente(subdomain);
  req.tenant = {
    id: tenant.id,
    nome: tenant.nome,
    slug: tenant.slug,
    status: tenant.status
  };
  next();
};
var identificarTenantMiddleware_default = identificarTenantMiddleware;

// src/middlewares/lidarErroMiddleware.ts
var import_zod31 = __toESM(require("zod"), 1);
var lidarErroMiddleware = async (error, req, res, _next) => {
  console.warn(error);
  const metodo = req.method;
  const path2 = req.path;
  const data = (/* @__PURE__ */ new Date()).toLocaleString();
  if (error instanceof import_zod31.default.ZodError) {
    res.status(422).json({
      erro: "Erro na valida\xE7\xE3o dos dados",
      mensagem: error.issues.map((e) => `${e.code}: ${e.message}`),
      metodo,
      status: 422,
      path: path2,
      data
    });
    return;
  } else if (error instanceof AppException) {
    res.status(error.status).json({
      erro: error.erro,
      mensagem: error.mensagem,
      metodo,
      status: error.status,
      path: path2,
      data
    });
    return;
  } else {
    res.status(500).json({
      erro: "Erro interno do servidor",
      mensagem: error,
      metodo,
      status: 500,
      path: path2,
      data
    });
    return;
  }
};
var lidarErroMiddleware_default = lidarErroMiddleware;

// src/middlewares/naoEncontradoMiddleware.ts
var naoEncontradoMiddleware = async (_req, _res) => {
  throw new NaoEncontradoException("A rota requisitada n\xE3o foi encontrada");
};
var naoEncontradoMiddleware_default = naoEncontradoMiddleware;

// src/middlewares/validarSchemaMiddleware.ts
var validarSchemaMiddleware = (schema, type) => async (req, _res, next) => {
  let data;
  if (type === "PARAMS") {
    data = req.params;
  } else if (type === "REQUEST_BODY") {
    data = req.body;
  }
  const result = schema.safeParse(data);
  if (result.error) {
    throw new AppException(
      result.error.issues.map((e) => `${e.code}: ${e.message}`),
      422,
      `Erro de valida\xE7\xE3o do ${type}`
    );
  }
  next();
};
var validarSchemaMiddleware_default = validarSchemaMiddleware;

// src/middlewares/validarTokenMiddleware.ts
var import_jsonwebtoken = __toESM(require("jsonwebtoken"), 1);

// src/services/usuariosService.ts
var verificarUsuarioExistente = async (id) => {
  const usuario = await prisma.usuarios.findUnique({
    where: { id }
  });
  if (!usuario) {
    throw new NaoEncontradoException("Usu\xE1rio n\xE3o encontrada");
  }
  return usuario;
};

// src/middlewares/validarTokenMiddleware.ts
var validarTokenMiddleware = async (req, _res, next) => {
  const authHeader = req.headers["authorization"];
  if (!authHeader) throw new NaoAutorizadoException("Token n\xE3o fornecido");
  const tokenparts = authHeader.split(" ");
  if (tokenparts.length !== 2) {
    throw new NaoAutorizadoException("Erro no formato do token");
  }
  const [scheme, token] = tokenparts;
  if (!/^Bearer$/i.test(scheme)) {
    throw new NaoAutorizadoException("Token mal formatado");
  }
  const decoded = import_jsonwebtoken.default.verify(token, JWT_SECRET);
  if (!decoded) {
    throw new NaoAutorizadoException("Token inv\xE1lido");
  }
  await verificarUsuarioExistente(decoded.id);
  if (decoded.cargo !== "global_admin") {
    if (!decoded.tenant || !decoded.tenant.id) {
      throw new NaoAutorizadoException("Token mal formatado");
    }
    if (decoded.tenant.id !== req.tenant.id) {
      throw new ProibidoException("Token de acesso n\xE3o corresponde a empresa");
    }
  } else {
    decoded.tenant.id = req.tenant.id;
  }
  req.user = decoded;
  return next();
};
var validarTokenMiddleware_default = validarTokenMiddleware;

// src/routes/index.ts
var import_express5 = require("express");

// src/routes/eventosRoutes.ts
var import_express = require("express");

// src/controllers/eventos/criarEventoController.ts
var criarEvento = async (req, res) => {
  const { titulo, descricao, closingDate, limiteVagas } = req.body;
  const evento = await prisma.eventos.create({
    data: {
      titulo,
      descricao,
      tenantId: req.tenant.id,
      closingDate: new Date(closingDate),
      limiteVagas: limiteVagas || null,
      linkSlug: generateSlug(titulo)
    }
  });
  return res.status(201).json({
    mensagem: "Evento criado com sucesso!",
    evento,
    linkPublico: `/eventos/${evento.linkSlug}`
  });
};
var criarEventoController_default = criarEvento;

// src/controllers/eventos/deletarEventoController.ts
var deletarEvento = async (req, res) => {
  const { id } = req.params;
  await verificarEventoExistente(id, req.tenant.id);
  await prisma.eventos.update({
    where: {
      id,
      tenantId: req.tenant.id
    },
    data: {
      status: "encerrado"
    }
  });
  return res.status(204).json({ mensagem: "Evento deletado com sucesso" });
};
var deletarEventoController_default = deletarEvento;

// src/controllers/eventos/detalhesEventoController.ts
var detalhesEvento = async (req, res) => {
  const { id } = req.params;
  const evento = await verificarEventoExistente(id, req.tenant.id);
  return res.status(200).json(evento);
};
var detalhesEventoController_default = detalhesEvento;

// src/controllers/eventos/editarEventoController.ts
var editarEvento = async (req, res) => {
  const { id } = req.params;
  const { titulo, descricao, closingDate, limiteVagas } = req.body;
  await verificarEventoExistente(id, req.tenant.id);
  const eventoAtualizado = await prisma.eventos.update({
    where: {
      id,
      tenantId: req.tenant.id
    },
    data: {
      titulo,
      descricao,
      closingDate,
      limiteVagas
    }
  });
  return res.json({
    mensagem: "Evento atualizado com sucesso",
    evento: eventoAtualizado
  });
};
var editarEventoController_default = editarEvento;

// src/controllers/eventos/listarEventosController.ts
var listarEventos = async (req, res) => {
  const eventos = await prisma.eventos.findMany({
    where: {
      status: "ativo",
      tenantId: req.tenant.id
    }
  });
  return res.status(200).json(eventos);
};
var listarEventosController_default = listarEventos;

// src/routes/eventosRoutes.ts
var eventosRoutes = (0, import_express.Router)({ mergeParams: true });
eventosRoutes.post(
  "/",
  validarTokenMiddleware_default,
  validarSchemaMiddleware_default(criarEventoSchema_default.shape.request, "REQUEST_BODY"),
  criarEventoController_default
);
eventosRoutes.get("/", listarEventosController_default);
eventosRoutes.get(
  "/:id",
  validarSchemaMiddleware_default(detalhesEventoSchema_default.shape.params, "PARAMS"),
  detalhesEventoController_default
);
eventosRoutes.put(
  "/:id",
  validarTokenMiddleware_default,
  validarSchemaMiddleware_default(editarEventoSchema_default.shape.params, "PARAMS"),
  validarSchemaMiddleware_default(editarEventoSchema_default.shape.request, "REQUEST_BODY"),
  editarEventoController_default
);
eventosRoutes.delete(
  "/:id",
  validarTokenMiddleware_default,
  validarSchemaMiddleware_default(deletarEventoSchema_default.shape.params, "PARAMS"),
  deletarEventoController_default
);
var eventosRoutes_default = eventosRoutes;

// src/routes/inscricoesRoutes.ts
var import_express2 = require("express");

// src/controllers/inscricoes/buscarInscricoesController.ts
var buscarInscricoes = async (req, res) => {
  const { id: evento_id } = req.params;
  const evento = await verificarEventoExistente(evento_id, req.tenant.id);
  const inscricoes = await prisma.inscricoes.findMany({
    where: { eventoId: evento_id, tenantId: req.tenant.id }
  });
  const response = {
    evento,
    inscricoes
  };
  return res.status(200).json(response);
};
var buscarInscricoesController_default = buscarInscricoes;

// src/controllers/inscricoes/criarInscricaoController.ts
var criarInscricao = async (req, res) => {
  const { id: evento_id } = req.params;
  const { nome, email, curso } = req.body;
  const evento = await verificarEventoExistente(evento_id, req.tenant.id);
  verificarEventoEncerradoOuSemVagas(evento);
  const usuarioInscrito = await prisma.inscricoes.findFirst({
    where: {
      eventoId: evento_id,
      tenantId: req.tenant.id,
      email
    }
  });
  if (usuarioInscrito) {
    throw new ConflitoException("Usu\xE1rio j\xE1 inscrito no evento");
  }
  const novaInscricao = await prisma.inscricoes.create({
    data: {
      eventoId: evento_id,
      tenantId: req.tenant.id,
      nome,
      email,
      curso
    },
    include: {
      evento: true
    }
  });
  await prisma.eventos.update({
    where: {
      id: evento_id,
      tenantId: req.tenant.id
    },
    data: {
      numeroInscritos: {
        increment: 1
      }
    }
  });
  return res.status(201).json({
    mensagem: "Inscri\xE7\xE3o realizada com sucesso!",
    inscricao: novaInscricao
  });
};
var criarInscricaoController_default = criarInscricao;

// src/utils/exportCSV.ts
var import_json2csv = require("json2csv");
function exportToCSV(fields, data) {
  const json2csvParser = new import_json2csv.Parser({ fields });
  const csv = json2csvParser.parse(data);
  return csv;
}
var exportCSV_default = exportToCSV;

// src/controllers/inscricoes/exportarInscricoesParaCSVController.ts
var exportarInscricoesParaCSV = async (req, res) => {
  const { id: evento_id } = req.params;
  await verificarEventoExistente(evento_id, req.tenant.id);
  const inscricoes = await prisma.inscricoes.findMany({
    where: { eventoId: evento_id, tenantId: req.tenant.id }
  });
  if (inscricoes.length === 0) {
    throw new NaoEncontradoException(
      "Nenhuma inscri\xE7\xE3o encontrado para o evento"
    );
  }
  const fields = ["id", "nome", "email", "curso", "status", "createdAt"];
  const fileName = `inscricoes_evento_${evento_id}.csv`;
  const csv = exportCSV_default(fields, inscricoes);
  res.header("Content-Type", "text/csv");
  res.attachment(fileName);
  return res.status(200).send(csv);
};
var exportarInscricoesParaCSVController_default = exportarInscricoesParaCSV;

// src/routes/inscricoesRoutes.ts
var inscricoesRoutes = (0, import_express2.Router)();
inscricoesRoutes.post(
  "/:id/inscrever",
  validarSchemaMiddleware_default(criarInscricaoSchema_default.shape.params, "PARAMS"),
  validarSchemaMiddleware_default(criarInscricaoSchema_default.shape.request, "REQUEST_BODY"),
  criarInscricaoController_default
);
inscricoesRoutes.get(
  "/:id/inscricoes",
  validarTokenMiddleware_default,
  validarSchemaMiddleware_default(buscarInscricoesSchema_default.shape.params, "PARAMS"),
  buscarInscricoesController_default
);
inscricoesRoutes.get(
  "/:id/inscricoes/export",
  validarTokenMiddleware_default,
  validarSchemaMiddleware_default(
    exportarInscricoesParaCSVSchema_default.shape.params,
    "PARAMS"
  ),
  exportarInscricoesParaCSVController_default
);
var inscricoesRoutes_default = inscricoesRoutes;

// src/routes/tenantsRoutes.ts
var import_express3 = require("express");

// src/controllers/tenants/buscarTenantController.ts
var buscarTenant = async (req, res) => {
  const tenant = await verificarTenantExistente(req.tenant.slug);
  res.status(200).json(tenant);
};
var buscarTenantController_default = buscarTenant;

// src/controllers/tenants/buscarTodasTenantsController.ts
var buscarTodasTenants = async (_req, res) => {
  const tenants = await prisma.tenants.findMany({
    include: {
      _count: {
        select: {
          eventos: true
        }
      }
    }
  });
  res.status(200).json(tenants);
};
var buscarTodasTenantsController_default = buscarTodasTenants;

// src/controllers/tenants/criarTenantController.ts
var import_bcryptjs = __toESM(require("bcryptjs"), 1);
var criarTenant = async (req, res) => {
  const {
    nome,
    slug,
    cnpj,
    telefone,
    email,
    site,
    logoUrl,
    adminEmail,
    adminSenha,
    adminNome
  } = req.body;
  const cnpjToSave = cnpj.replace(/[^\d]/g, "");
  const telefoneToSave = telefone.replace(/[^\d]/g, "");
  const slugExistente = await prisma.tenants.findUnique({
    where: { slug }
  });
  if (slugExistente) {
    throw new ConflitoException("Slug j\xE1 est\xE1 em uso");
  }
  const emailExistente = await prisma.tenants.findUnique({
    where: {
      email
    }
  });
  if (emailExistente) {
    throw new ConflitoException("E-mail j\xE1 est\xE1 em uso");
  }
  const cnpjExistente = await prisma.tenants.findUnique({
    where: {
      cnpj: cnpjToSave
    }
  });
  if (cnpjExistente) {
    throw new ConflitoException("CNPJ j\xE1 est\xE1 em uso");
  }
  const result = await prisma.$transaction(async (tx) => {
    const tenant = await tx.tenants.create({
      data: {
        nome,
        slug,
        cnpj: cnpjToSave,
        email,
        telefone: telefoneToSave,
        logoUrl,
        site
      }
    });
    const senha = await import_bcryptjs.default.hash(adminSenha, 10);
    const admin = await tx.usuarios.create({
      data: {
        tenantId: tenant.id,
        email: adminEmail,
        senhaHash: senha,
        nome: adminNome,
        cargo: "admin"
      }
    });
    const { senhaHash, ...adminSemSenha } = admin;
    return { tenant, admin: adminSemSenha };
  });
  res.status(201).json({
    mensagem: "Tenant criado com sucesso",
    tenant: result.tenant,
    admin: result.admin,
    acesso_url: gerarTenantSlug(slug)
  });
};
var criarTenantController_default = criarTenant;

// src/controllers/tenants/deletarTenantController.ts
var deletarTenant = async (req, res) => {
  const tenant = await verificarTenantExistente(req.tenant.slug);
  await prisma.tenants.update({
    where: {
      id: tenant.id
    },
    data: {
      status: "cancelado"
    }
  });
  await prisma.eventos.updateMany({
    where: {
      tenantId: tenant.id
    },
    data: {
      status: "encerrado"
    }
  });
  res.status(204).send();
};
var deletarTenantController_default = deletarTenant;

// src/controllers/tenants/editarTenantController.ts
var editarTenant = async (req, res) => {
  const { cnpj, email, slug, telefone } = req.body;
  const cnpjToSave = cnpj?.replace(/[^\d]/g, "");
  const telefoneToSave = telefone?.replace(/[^\d]/g, "");
  if (slug) {
    const slugExistente = await prisma.tenants.findUnique({
      where: { slug }
    });
    if (slugExistente) {
      throw new ConflitoException("Slug j\xE1 est\xE1 em uso");
    }
  }
  if (email) {
    const emailExistente = await prisma.tenants.findUnique({
      where: {
        email
      }
    });
    if (emailExistente) {
      throw new ConflitoException("E-mail j\xE1 est\xE1 em uso");
    }
  }
  if (cnpj) {
    const cnpjExistente = await prisma.tenants.findUnique({
      where: {
        cnpj: cnpjToSave
      }
    });
    if (cnpjExistente) {
      throw new ConflitoException("CNPJ j\xE1 est\xE1 em uso");
    }
  }
  const tenantAtualizada = await prisma.tenants.update({
    where: {
      slug: req.tenant.slug
    },
    data: {
      ...req.body,
      telefone: telefoneToSave,
      cnpj: cnpjToSave
    }
  });
  res.status(201).json({
    mensagem: "Tenant atualizada com sucesso",
    tenant: tenantAtualizada,
    acesso_url: gerarTenantSlug(tenantAtualizada.slug)
  });
};
var editarTenantController_default = editarTenant;

// src/middlewares/globalAdminRouteMiddleware.ts
var globalAdminRouteMiddleware = async (req, _res, next) => {
  if (!req.user) {
    throw new NaoAutorizadoException("Usu\xE1rio n\xE3o logado");
  }
  const cargo = req.user.cargo;
  if (cargo !== "global_admin") {
    throw new ProibidoException("Rota exclusiva para admin global");
  }
  next();
};
var globalAdminRouteMiddleware_default = globalAdminRouteMiddleware;

// src/routes/tenantsRoutes.ts
var tenantsRoutes = (0, import_express3.Router)({ mergeParams: true });
tenantsRoutes.post(
  "/",
  validarSchemaMiddleware_default(criarTenantSchema_default.shape.request, "REQUEST_BODY"),
  criarTenantController_default
);
tenantsRoutes.use(identificarTenantMiddleware_default);
tenantsRoutes.get("/", validarTokenMiddleware_default, buscarTenantController_default);
tenantsRoutes.get(
  "/all",
  validarTokenMiddleware_default,
  globalAdminRouteMiddleware_default,
  buscarTodasTenantsController_default
);
tenantsRoutes.put(
  "/",
  validarTokenMiddleware_default,
  adminRouteMiddleware_default,
  validarSchemaMiddleware_default(editarTenantSchema_default.shape.request, "REQUEST_BODY"),
  editarTenantController_default
);
tenantsRoutes.delete(
  "/",
  validarTokenMiddleware_default,
  adminRouteMiddleware_default,
  deletarTenantController_default
);
var tenantsRoutes_default = tenantsRoutes;

// src/routes/usuariosRoutes.ts
var import_express4 = require("express");

// src/controllers/usuarios/buscarUsuarioController.ts
var buscarUsuario = async (req, res) => {
  const usuario = await prisma.usuarios.findUnique({
    where: {
      id: req.user.id
    },
    omit: {
      senhaHash: true
    }
  });
  if (!usuario) {
    throw new NaoEncontradoException("Usu\xE1rio n\xE3o encontrado");
  }
  return res.status(200).json(usuario);
};
var buscarUsuarioController_default = buscarUsuario;

// src/controllers/usuarios/buscarUsuariosController.ts
var buscarUsuarios = async (_req, res) => {
  const usuarios = await prisma.usuarios.findMany({
    include: {
      tenant: {
        select: {
          nome: true,
          slug: true
        }
      }
    },
    omit: {
      senhaHash: true
    }
  });
  return res.status(200).json(usuarios);
};
var buscarUsuariosController_default = buscarUsuarios;

// src/controllers/usuarios/loginUsuarioController.ts
var import_bcryptjs2 = __toESM(require("bcryptjs"), 1);
var import_jsonwebtoken2 = __toESM(require("jsonwebtoken"), 1);
var loginUsuario = async (req, res) => {
  const { email, senha } = req.body;
  const usuario = await prisma.usuarios.findFirst({
    where: { email }
  });
  if (!usuario) throw new NaoAutorizadoException("email/senha incorreta");
  const senhaValida = await import_bcryptjs2.default.compare(senha, usuario.senhaHash);
  if (!senhaValida) throw new NaoAutorizadoException("email/senha incorreta");
  if (usuario.tenantId && usuario.tenantId !== req.tenant?.id) {
    throw new NaoAutorizadoException("email/senha incorreta");
  }
  const { senhaHash, ...usuarioSemSenha } = usuario;
  const token = import_jsonwebtoken2.default.sign(
    {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      cargo: usuario.cargo,
      tenant: {
        id: req.tenant.id
      }
    },
    JWT_SECRET,
    { expiresIn: "1d" }
  );
  const expiraEm = /* @__PURE__ */ new Date();
  expiraEm.setHours(expiraEm.getHours() + 24);
  return res.status(200).json({
    usuario: usuarioSemSenha,
    token,
    expira_em: expiraEm.toLocaleString()
  });
};
var loginUsuarioController_default = loginUsuario;

// src/controllers/usuarios/registrarUsuarioController.ts
var import_bcryptjs3 = __toESM(require("bcryptjs"), 1);
var registrarUsuario = async (req, res) => {
  const { nome, email, senha, cargo } = req.body;
  const usuarioExistente = await prisma.usuarios.findFirst({
    where: {
      email,
      tenantId: req.tenant.id
    }
  });
  if (usuarioExistente) {
    throw new ConflitoException("Usu\xE1rio j\xE1 cadastrado com esse email");
  }
  const senhaHash = await import_bcryptjs3.default.hash(senha, 10);
  const novoUsuario = await prisma.usuarios.create({
    data: {
      nome,
      email,
      tenantId: req.tenant.id,
      senhaHash,
      cargo
    },
    omit: {
      senhaHash: true
    }
  });
  return res.status(201).json({
    mensagem: "Usu\xE1rio cadastrado com sucesso!",
    usuario: novoUsuario
  });
};
var registrarUsuarioController_default = registrarUsuario;

// src/routes/usuariosRoutes.ts
var usuariosRoutes = (0, import_express4.Router)();
usuariosRoutes.post(
  "/auth/register",
  validarSchemaMiddleware_default(registrarUsuarioSchema_default.shape.request, "REQUEST_BODY"),
  registrarUsuarioController_default
);
usuariosRoutes.post(
  "/auth/login",
  validarSchemaMiddleware_default(loginUsuarioSchema_default.shape.request, "REQUEST_BODY"),
  loginUsuarioController_default
);
usuariosRoutes.get("/me", validarTokenMiddleware_default, buscarUsuarioController_default);
usuariosRoutes.get(
  "/all",
  validarTokenMiddleware_default,
  globalAdminRouteMiddleware_default,
  buscarUsuariosController_default
);
var usuariosRoutes_default = usuariosRoutes;

// src/routes/index.ts
var routes = (0, import_express5.Router)({ mergeParams: true });
routes.get("/", (_req, res) => {
  res.send(`Servidor rodando na porta ${process.env.PORT}`);
});
routes.use("/tenants", tenantsRoutes_default);
routes.use(identificarTenantMiddleware_default);
routes.use("/eventos", eventosRoutes_default);
routes.use("/usuarios", usuariosRoutes_default);
routes.use("/inscricoes", inscricoesRoutes_default);
var routes_default = routes;

// src/app.ts
var app = (0, import_express6.default)();
app.use(
  (0, import_cors.default)({
    origin: (origin, callback) => {
      console.info(origin);
      if (!origin || origin?.includes("localhost") || origin?.includes("lvh.me") || origin === FRONTEND_URL) {
        callback(null, origin);
      } else {
        callback(new ProibidoException("URL bloqueado pelo cors"));
      }
    },
    credentials: true
  })
);
app.use(import_express6.default.json());
app.use(
  "/docs",
  (0, import_express_api_reference.apiReference)({
    spec: {
      content: generateOpenAPI()
    },
    theme: "purple"
  })
);
app.use("/api", routes_default);
app.use(naoEncontradoMiddleware_default);
app.use(lidarErroMiddleware_default);
var app_default = app;

// src/config/seed.ts
var import_bcryptjs4 = __toESM(require("bcryptjs"), 1);
var import_meta2 = {};
var seed = async () => {
  const adminExistente = await prisma.usuarios.findFirst({
    where: {
      email: GLOBAL_ADMIN_EMAIL
    }
  });
  if (!adminExistente) {
    const senhaHash = await import_bcryptjs4.default.hash(GLOBAL_ADMIN_SENHA, 10);
    await prisma.usuarios.create({
      data: {
        nome: GLOBAL_ADMIN_NOME,
        email: GLOBAL_ADMIN_EMAIL,
        senhaHash,
        cargo: "global_admin"
      }
    });
    console.info("Global admin criado");
  }
};
if (process.argv[1] === import_meta2.filename) {
  seed().then(async () => {
    await prisma.$disconnect();
  }).catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
}
var seed_default = seed;

// src/server.ts
app_default.listen(PORT, async (error) => {
  if (error) {
    console.warn(`Falha ao iniciar servidor na porta ${PORT}`);
  }
  await seed_default();
  console.info(`Servidor rodando na porta ${PORT}`);
});
