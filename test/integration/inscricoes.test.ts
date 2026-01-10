import request from "supertest";
import { eventosModel, inscricoesModel } from "../../generated/prisma/models";
import app from "../../src/app";
import { prisma } from "../../src/config/database";
import {
  criarEventoTeste,
  criarInscricaoTeste,
  criarTenantTeste,
  criarUsuarioTeste,
  gerarTokenTeste,
  limparBancoTeste,
} from "../helpers";

describe("Rotas de Inscrições (Integração)", () => {
  let tenantId: string;
  let tenantSlug: string;
  let token: string;
  let eventoId: string;
  let evento: eventosModel;
  let inscricao: inscricoesModel;

  beforeAll(async () => {
    await limparBancoTeste();
    const tenant = await criarTenantTeste("ativo");
    tenantId = tenant.id;
    tenantSlug = tenant.slug;

    // Criar usuário Admin do Tenant
    const usuarioAdmin = await criarUsuarioTeste(tenantId, { cargo: "admin" });
    token = gerarTokenTeste(
      tenantId,
      usuarioAdmin.id,
      usuarioAdmin.email,
      usuarioAdmin.nome,
      "admin"
    );

    // Criar um evento para receber inscrições
    evento = await criarEventoTeste(tenantId, "ativo");
    eventoId = evento.id;

    inscricao = await criarInscricaoTeste(tenantId, eventoId, usuarioAdmin);
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("POST /inscricoes/:id/inscrever [Realizar Inscrição]", () => {
    it("Deve realizar uma inscrição com sucesso", async () => {
      const payload = {
        nome: "Participante Teste",
        email: "participante@teste.com",
        curso: "Engenharia de Software", // Campo opcional no schema, mas presente no teste
      };

      const response = await request(app)
        .post(`/api/inscricoes/${eventoId}/inscrever`)
        .set("Host", `${tenantSlug}.lvh.me`)
        .send(payload);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty(
        "mensagem",
        "Inscrição realizada com sucesso!"
      );
      expect(response.body.inscricao).toHaveProperty("email", payload.email);
    });

    it("Deve falhar inscrição duplicada (mesmo email e evento)", async () => {
      const payload = {
        nome: "Participante Duplicado",
        email: inscricao.email, // Mesmo email anterior
        curso: "Computação",
      };

      const response = await request(app)
        .post(`/api/inscricoes/${eventoId}/inscrever`)
        .set("Host", `${tenantSlug}.lvh.me`)
        .send(payload);

      expect(response.status).toBe(409);
    });
  });

  describe("GET /inscricoes/:id/inscricoes [Listar Inscrições]", () => {
    it("Deve listar as inscrições de um evento (Admin)", async () => {
      const response = await request(app)
        .get(`/api/inscricoes/${eventoId}/inscricoes`)
        .set("Authorization", `Bearer ${token}`)
        .set("Host", `${tenantSlug}.lvh.me`);

      expect(response.status).toBe(200);
      expect(response.body.evento).toHaveProperty("linkSlug", evento.linkSlug);
      expect(Array.isArray(response.body.inscricoes)).toBe(true);
      expect(response.body.inscricoes.length).toBeLessThanOrEqual(2);
    });
  });

  describe("GET /inscricoes/:id/inscricoes/export [Exportar CSV]", () => {
    it("Deve exportar inscrições em formato CSV", async () => {
      const response = await request(app)
        .get(`/api/inscricoes/${eventoId}/inscricoes/export`)
        .set("Authorization", `Bearer ${token}`)
        .set("Host", `${tenantSlug}.lvh.me`);

      expect(response.status).toBe(200);
      expect(response.header["content-type"]).toContain("text/csv");

      // Verifica header do CSV
      const [header] = response.text.split("\n");
      expect(header.trim()).toBe(
        '"id","nome","email","curso","status","createdAt"'
      );

      expect(response.text).toContain("participante@teste.com"); // Verifica conteúdo
    });
  });
});
