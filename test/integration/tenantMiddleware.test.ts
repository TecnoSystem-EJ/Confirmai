import request from "supertest";
import app from "../../src/app";
import { criarTenantTeste, limparBancoTeste } from "../helpers";
import { prisma } from "../../src/config/database";

describe("Middleware: identificarTenantMiddleware", () => {
  beforeAll(async () => {
    // Limpar o banco de dados de teste
    await limparBancoTeste();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("Deve retornar 404 se o subdomínio (slug) não existir no banco", async () => {
    const response = await request(app)
      .get("/api/eventos") // Rota que usa o middleware
      .set("Host", "slug-inexistente.lvh.me");

    expect(response.status).toBe(404);
    expect(response.body.erro).toBe("Not Found");
    expect(response.body.mensagem).toBe("Empresa não encontrada");
  });

  it("Deve retornar 401 se o tenant não estiver ativo", async () => {
    const tenant = await criarTenantTeste("suspenso");

    const response = await request(app)
      .get("/api/eventos") // Rota que usa o middleware
      .set("Host", `${tenant.slug}.lvh.me`);

    expect(response.status).toBe(401);
    expect(response.body.erro).toBe("Unauthorized");
    expect(response.body.mensagem).toBe("Conta suspensa ou cancelada");
  });
});
