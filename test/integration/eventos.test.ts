import request from "supertest";
import { eventosModel, usuariosModel } from "../../generated/prisma/models";
import app from "../../src/app"; // Importa o app Express
import { prisma } from "../../src/config/database";
import {
  criarEventoTeste,
  criarTenantTeste,
  criarUsuarioTeste,
  gerarTokenTeste,
  limparBancoTeste,
} from "../helpers";

// Baseado na documentação de 'docs/routes/eventosDocs.ts'
describe("Rotas de Eventos (Integração)", () => {
  let tenantId: string;
  let tenantSlug: string;
  let userTeste: usuariosModel;
  let userToken: string;

  beforeAll(async () => {
    // Prepara o banco de dados de teste
    await limparBancoTeste();
    const tenant = await criarTenantTeste();
    tenantId = tenant.id;
    tenantSlug = tenant.slug;

    // Criar um usuário admin para testes
    userTeste = await criarUsuarioTeste(tenantId, {
      email: "admin@teste.com",
      cargo: "admin",
    });

    userToken = gerarTokenTeste(
      tenantId,
      userTeste.id,
      userTeste.email,
      userTeste.nome,
      userTeste.cargo
    );
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("POST /eventos/ [Criação de Evento]", () => {
    it("Deve criar um evento com sucesso (Status 201)", async () => {
      // Input baseado no schema 'CriarEventoRequest' do swagger
      const payload = {
        titulo: "Workshop de Jest",
        descricao: "Aprendendo testes de integração",
        closingDate: new Date(Date.now() + 86400000)
          .toISOString()
          .split("T")[0], // Amanhã
        limiteVagas: 50,
      };

      const response = await request(app)
        .post("/api/eventos")
        .set("authorization", `Bearer ${userToken}`)
        // Simula o subdomínio para o middleware identificarTenantMiddleware
        .set("Host", `${tenantSlug}.lvh.me`)
        .send(payload);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty(
        "mensagem",
        "Evento criado com sucesso!"
      );
      expect(response.body.evento).toMatchObject({
        titulo: payload.titulo,
        tenantId: tenantId,
        status: "rascunho", // Valor default definido no Prisma Schema
      });
    });

    it("Deve retornar 422 se faltar campos obrigatórios", async () => {
      // Baseado na resposta 422 documentada em eventosDocs.ts
      const payloadInvalido = {
        descricao: "Sem título",
      };

      const response = await request(app)
        .post("/api/eventos")
        .set("Authorization", `Bearer ${userToken}`)
        .set("Host", `${tenantSlug}.lvh.me`)
        .send(payloadInvalido);

      expect(response.status).toBe(422);
      expect(response.body).toHaveProperty(
        "erro",
        "Erro de validação do REQUEST_BODY"
      );
    });
  });

  describe("GET /eventos/ [Listagem]", () => {
    it("Deve listar os eventos ativos", async () => {
      await prisma.eventos.deleteMany({ where: { tenantId } });

      // Cria um evento ativo direto no banco para testar a listagem
      await criarEventoTeste(tenantId, "ativo", {
        titulo: "Evento Ativo",
        linkSlug: "evento-ativo",
      });

      const response = await request(app)
        .get("/api/eventos")
        .set("Host", `${tenantSlug}.lvh.me`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBe(1);
      expect(response.body[0]).toHaveProperty("titulo", "Evento Ativo");
    });
  });

  describe("Operações em Evento Específico", () => {
    let evento: eventosModel;

    beforeEach(async () => {
      await prisma.eventos.deleteMany({ where: { tenantId } });

      evento = await criarEventoTeste(tenantId, "ativo", {
        titulo: "Evento Inicial",
        linkSlug: "evento-inicial",
      });
    });

    it("GET /eventos/:id - Deve retornar detalhes do evento", async () => {
      const response = await request(app)
        .get(`/api/eventos/${evento.id}`)
        .set("Authorization", `Bearer ${userToken}`)
        .set("Host", `${tenantSlug}.lvh.me`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("titulo", evento.titulo);
    });

    it("PUT /eventos/:id - Deve atualizar o evento", async () => {
      const payload = {
        titulo: "Evento Atualizado",
        descricao: "Nova descrição",
      };

      const response = await request(app)
        .put(`/api/eventos/${evento.id}`)
        .set("Authorization", `Bearer ${userToken}`)
        .set("Host", `${tenantSlug}.lvh.me`)
        .send(payload);

      expect(response.status).toBe(200);
      expect(response.body.evento).toMatchObject({
        titulo: "Evento Atualizado",
        descricao: "Nova descrição",
      });
    });

    it("DELETE /eventos/:id - Deve deletar o evento", async () => {
      const response = await request(app)
        .delete(`/api/eventos/${evento.id}`)
        .set("Authorization", `Bearer ${userToken}`)
        .set("Host", `${tenantSlug}.lvh.me`);

      expect(response.status).toBe(204);

      // Verify it's gone
      const deleted = await prisma.eventos.findUnique({
        where: { id: evento.id },
      });
      expect(deleted).toHaveProperty("status", "encerrado");
    });
  });
});
