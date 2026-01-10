import request from "supertest";
import { usuariosModel } from "../../generated/prisma/models";
import app from "../../src/app";
import { prisma } from "../../src/config/database";
import {
  criarTenantTeste,
  criarUsuarioTeste,
  gerarTokenTeste,
  limparBancoTeste,
} from "../helpers";

describe("Rotas de Usuários (Integração)", () => {
  let tenantId: string;
  let tenantSlug: string;
  let userToken: string;
  let userTeste: usuariosModel;

  beforeAll(async () => {
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

  describe("POST /usuarios/auth/register [Registro de Usuário]", () => {
    it("Deve registrar um novo usuário com sucesso", async () => {
      const payload = {
        nome: "Novo Usuario",
        email: "novo@teste.com",
        senha: "senha-segura",
        cargo: "admin",
      };

      const response = await request(app)
        .post("/api/usuarios/auth/register")
        .set("Host", `${tenantSlug}.lvh.me`)
        .send(payload);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty(
        "mensagem",
        "Usuário cadastrado com sucesso!"
      );
      expect(response.body.usuario).toHaveProperty("email", payload.email);
    });

    it("Deve falhar ao registrar email duplicado no mesmo tenant", async () => {
      // Tenta registrar novamente o mesmo email criado no  beforeAll
      const payload = {
        nome: "Duplicado",
        email: "admin@teste.com", // Já existe
        senha: "senha123",
        cargo: "membro",
      };

      const response = await request(app)
        .post("/api/usuarios/auth/register")
        .set("Host", `${tenantSlug}.lvh.me`)
        .send(payload);

      expect(response.status).toBe(409);
    });
  });

  describe("POST /usuarios/auth/login [Login]", () => {
    it("Deve autenticar com credenciais válidas", async () => {
      // O usuário admin foi criado no beforeAll com senha "senha-teste" (default do helper)
      const payload = {
        email: "admin@teste.com",
        senha: "senha-teste",
      };

      const response = await request(app)
        .post("/api/usuarios/auth/login")
        .set("Host", `${tenantSlug}.lvh.me`)
        .send(payload);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("token");
      expect(response.body.usuario).toHaveProperty("email", payload.email);
    });

    it("Deve falhar com senha incorreta", async () => {
      const payload = {
        email: "admin@teste.com",
        senha: "senha-errada",
      };

      const response = await request(app)
        .post("/api/usuarios/auth/login")
        .set("Host", `${tenantSlug}.lvh.me`)
        .send(payload);

      expect(response.status).toBe(401);
      expect(response.body).toHaveProperty("mensagem", "email/senha incorreta");
    });
  });

  describe("GET /usuarios/me [Dados do Usuário Atual]", () => {
    it("Deve retornar dados do usuário autenticado", async () => {
      const response = await request(app)
        .get("/api/usuarios/me")
        .set("Host", `${tenantSlug}.lvh.me`)
        .set("Authorization", `Bearer ${userToken}`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("email", userTeste.email);
    });
  });

  describe("GET /usuarios/all [Listar Todos - Global]", () => {
    it("Deve listar todos os usuários (Global Admin)", async () => {
      // Admin Global para listar todos
      const userAdminGlobal = await criarUsuarioTeste(tenantId, {
        email: "global@teste.com",
        cargo: "global_admin",
      });

      const globalAdminToken = gerarTokenTeste(
        tenantId,
        userAdminGlobal.id,
        userAdminGlobal.email,
        userAdminGlobal.nome,
        userAdminGlobal.cargo
      );

      const response = await request(app)
        .get("/api/usuarios/all")
        .set("Host", `${tenantSlug}.lvh.me`)
        .set("Authorization", `Bearer ${globalAdminToken}`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeLessThanOrEqual(4);
    });

    it("Deve falhar ao enviar token inválido", async () => {
      const response = await request(app)
        .get("/api/usuarios/all")
        .set("Host", `${tenantSlug}.lvh.me`)
        .set("Authorization", `Bearer ${userToken}`); // Token de usuário normal

      expect(response.status).toBe(403);
    });
  });
});
