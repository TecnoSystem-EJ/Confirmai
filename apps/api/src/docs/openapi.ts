import {
  OpenApiGeneratorV3,
  OpenAPIRegistry,
} from "@asteasolutions/zod-to-openapi";
import "../config/zodSetup";
import eventosRegistry from "./routes/eventosDocs";
import inscricoesRegistry from "./routes/inscricoesDocs";
import tenantsRegistry from "./routes/tenantsDocs";
import usuariosRegistry from "./routes/usuariosDocs";

const globalRegistry = new OpenAPIRegistry([
  eventosRegistry,
  usuariosRegistry,
  tenantsRegistry,
  inscricoesRegistry,
]);

globalRegistry.registerComponent("securitySchemes", "bearerAuth", {
  type: "http",
  scheme: "bearer",
  bearerFormat: "JWT",
  description: "Insira o token JWT para autenticação",
});

export const generateOpenAPI = () => {
  const generator = new OpenApiGeneratorV3(globalRegistry.definitions);

  return generator.generateDocument({
    openapi: "3.0.0",
    info: {
      title: "Confirma aí",
      version: "1.0.0",
      description:
        "API de Gerenciamento de Eventos baseado em SAAS. Esta API utiliza arquitetura multi-tenant baseada em subdomínios.",
    },
    servers: [
      {
        url: "http://{tenant}.lvh.me:3000/api", // Para desenvolvimento
        description: "Servidor de Desenvolvimento",
        variables: {
          tenant: {
            default: "empresa1",
            description: "O slug do tenant (subdomínio)",
          },
        },
      },
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
    ],
  });
};
