import { OpenAPIRegistry } from "@asteasolutions/zod-to-openapi";
import conflictErroSchema from "../../schemas/error/conflictErroSchema";
import forbiddenErroSchema from "../../schemas/error/forbiddenErroSchema";
import notFoundErroSchema from "../../schemas/error/notFoundErroSchema";
import servidorErroSchema from "../../schemas/error/servidorErroSchema";
import unauthorizedErroSchema from "../../schemas/error/unauthorizedErroSchema";
import validationErroSchema from "../../schemas/error/validationErroSchema";
import buscarUsuarioSchema from "../../schemas/usuarios/buscarUsuarioSchema";
import buscarUsuariosSchema from "../../schemas/usuarios/buscarUsuariosSchema";
import loginUsuarioSchema from "../../schemas/usuarios/loginUsuarioSchema";
import registrarUsuarioSchema from "../../schemas/usuarios/registrarUsuarioSchema";

const usuariosRegistry = new OpenAPIRegistry();

const RegistrarUsuarioRequestRegister = usuariosRegistry.register(
  "RegistrarUsuarioRequest",
  registrarUsuarioSchema.shape.request
);
const RegistrarUsuarioResponseRegister = usuariosRegistry.register(
  "RegistrarUsuarioResponse",
  registrarUsuarioSchema.shape.response
);

const LoginUsuarioResponseRegister = usuariosRegistry.register(
  "LoginUsuarioResponse",
  loginUsuarioSchema.shape.response
);
const LoginUsuarioRequestRegister = usuariosRegistry.register(
  "LoginUsuarioRequest",
  loginUsuarioSchema.shape.request
);

const BuscarUsuarioResponseRegister = usuariosRegistry.register(
  "BuscarUsuarioResponse",
  buscarUsuarioSchema.shape.response
);

const BuscarUsuariosResponseRegister = usuariosRegistry.register(
  "BuscarUsuariosResponse",
  buscarUsuariosSchema.shape.response
);

// Registrar Usuário
usuariosRegistry.registerPath({
  method: "post",
  path: "/usuarios/auth/register",
  tags: ["Usuarios"],
  summary: "Registra um novo usuário",
  request: {
    body: {
      content: {
        "application/json": { schema: RegistrarUsuarioRequestRegister },
      },
    },
  },
  responses: {
    201: {
      description: "Usuário Registrado",
      content: {
        "application/json": { schema: RegistrarUsuarioResponseRegister },
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

// Login Usuário
usuariosRegistry.registerPath({
  method: "post",
  path: "/usuarios/auth/login",
  tags: ["Usuarios"],
  summary: "Login de um usuário",
  request: {
    body: {
      content: {
        "application/json": { schema: LoginUsuarioRequestRegister },
      },
    },
  },
  responses: {
    200: {
      description: "Usuário logado",
      content: {
        "application/json": { schema: LoginUsuarioResponseRegister },
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

// Buscar Usuário
usuariosRegistry.registerPath({
  method: "get",
  path: "/usuarios/me",
  tags: ["Usuarios"],
  summary: "Buscar próprio usuário",
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Usuário retornado",
      content: {
        "application/json": { schema: BuscarUsuarioResponseRegister },
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

// Buscar Usuários
usuariosRegistry.registerPath({
  method: "get",
  path: "/usuarios/all",
  tags: ["Usuarios"],
  summary: "Buscar todos os usuários",
  security: [{ bearerAuth: [] }],
  responses: {
    200: {
      description: "Usuários retornados",
      content: {
        "application/json": { schema: BuscarUsuariosResponseRegister },
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

export default usuariosRegistry;
