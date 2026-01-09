import request from "supertest";
import app from "../../src/app";
import { prisma } from "../../src/config/database";
import { gerarTenantSlug } from "../../src/services/tenantService";
import {
  criarTenantTeste,
  criarUsuarioTeste,
  gerarTokenTeste,
  limparBancoTeste,
} from "../helpers";

describe("Rotas de Tenants (Integração)", () => {
  let globalAdminToken: string;
  let tenantAdminToken: string;
  let tenantId: string;
  let tenantSlug: string;

  beforeAll(async () => {
    await limparBancoTeste();

    // Criar Tenant inicial e admin
    const tenant = await criarTenantTeste("ativo", { slug: "meu-tenant" });
    tenantId = tenant.id;
    tenantSlug = tenant.slug;

    // Criar usuário Admin do Tenant
    const usuarioAdmin = await criarUsuarioTeste(tenantId);
    tenantAdminToken = gerarTokenTeste(
      tenantId,
      usuarioAdmin.id,
      usuarioAdmin.email,
      usuarioAdmin.nome,
      "admin"
    );

    // Criar usuário Global Admin
    const usuarioGlobalAdmin = await criarUsuarioTeste(tenantId, {
      cargo: "global_admin",
    });
    globalAdminToken = gerarTokenTeste(
      tenantId,
      usuarioGlobalAdmin.id,
      usuarioGlobalAdmin.email,
      usuarioGlobalAdmin.nome,
      "global_admin"
    );
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  describe("POST /tenants/ [Criação de Tenant]", () => {
    it("Deve criar um novo tenant com sucesso", async () => {
      const payload = {
        nome: "Nova Empresa",
        cnpj: "42.838.734/0001-94",
        email: "rh@novaempresa.com",
        telefone: "11988887777",
        slug: "nova-empresa", // subdomínio
        adminEmail: "admin@novaempresa.com",
        adminSenha: "123456",
        adminNome: "Admin Nova Empresa",
      };

      const response = await request(app).post("/api/tenants").send(payload);

      expect(response.status).toBe(201);
      expect(response.body).toHaveProperty(
        "mensagem",
        "Tenant criado com sucesso"
      );
      expect(response.body).toHaveProperty(
        "acesso_url",
        gerarTenantSlug("nova-empresa")
      );
      expect(response.body.tenant).toHaveProperty("nome", payload.nome);
      expect(response.body.tenant).toHaveProperty("slug", payload.slug);
      expect(response.body.admin).toHaveProperty("email", payload.adminEmail);
    });

    it("Deve falhar ao criar tenant com slug duplicado", async () => {
      // Tenta criar com o slug do tenant já existente no beforeAll ("meu-tenant")
      const payload = {
        nome: "Empresa Duplicada",
        cnpj: "88.848.169/0001-47",
        email: "duplicada@teste.com",
        telefone: "11988887777",
        slug: "meu-tenant",
        adminEmail: "admin@empresa.com",
        adminSenha: "123456",
        adminNome: "Admin Empresa",
      };

      const response = await request(app).post("/api/tenants").send(payload);

      expect(response.status).toBe(409);
      expect(response.body).toHaveProperty("mensagem", "Slug já está em uso");
    });
  });

  describe("GET /tenants/ [Detalhes do Tenant Atual]", () => {
    it("Deve retornar os dados do tenant do token", async () => {
      const response = await request(app)
        .get("/api/tenants")
        .set("Authorization", `Bearer ${tenantAdminToken}`)
        .set("Host", `${tenantSlug}.lvh.me`);

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty("slug", "meu-tenant");
    });
  });

  describe("GET /tenants/all [Listar todos os Tenants]", () => {
    it("Deve listar todos os tenants (rota de Global Admin)", async () => {
      const response = await request(app)
        .get("/api/tenants/all")
        .set("Authorization", `Bearer ${globalAdminToken}`)
        .set("Host", `${tenantSlug}.lvh.me`);

      expect(response.status).toBe(200);
      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body.length).toBeLessThanOrEqual(2);
    });

    it("Deve negar acesso a usuários comuns/admins de tenant", async () => {
      const response = await request(app)
        .get("/api/tenants/all")
        .set("Authorization", `Bearer ${tenantAdminToken}`) // Apenas admin, não global
        .set("Host", `${tenantSlug}.lvh.me`);

      // globalAdminRouteMiddleware deve retornar 403 Forbidden
      expect(response.status).toBe(403);
    });
  });

  describe("PUT /tenants/ [Editar Tenant]", () => {
    it("Deve editar dados do tenant", async () => {
      const payload = {
        nome: "Minha Empresa Atualizada",
        site: "https://siteatualizado.com",
      };

      const response = await request(app)
        .put("/api/tenants")
        .set("Authorization", `Bearer ${tenantAdminToken}`)
        .set("Host", `${tenantSlug}.lvh.me`)
        .send(payload);

      expect(response.status).toBe(201);
      expect(response.body.tenant).toHaveProperty("nome", payload.nome);
      expect(response.body.tenant).toHaveProperty("site", payload.site);
    });
  });

  describe("DELETE /tenants/ [Deletar Tenant]", () => {
    it("Deve deletar o tenant atual", async () => {
      // Vamos criar um tenant descartável para deletar
      const tenantDesc = await criarTenantTeste("ativo");
      const usuarioDesc = await criarUsuarioTeste(tenantDesc.id);
      const tokenDesc = gerarTokenTeste(
        tenantDesc.id,
        usuarioDesc.id,
        usuarioDesc.email,
        usuarioDesc.nome,
        usuarioDesc.cargo
      );

      const response = await request(app)
        .delete("/api/tenants")
        .set("Authorization", `Bearer ${tokenDesc}`)
        .set("Host", `${tenantDesc.slug}.lvh.me`);

      expect(response.status).toBe(204);

      const check = await prisma.tenants.findUnique({
        where: { id: tenantDesc.id },
      });
      expect(check).toHaveProperty("status", "cancelado");
    });
  });
});
