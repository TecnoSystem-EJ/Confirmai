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

describe("Middleware: validarTokenMiddleware", () => {
  let tenantSlug: string;
  let usuario: usuariosModel;
  let token: string;

  beforeAll(async () => {
    // Limpar o banco de dados de teste
    await limparBancoTeste();
    const tenant = await criarTenantTeste();
    tenantSlug = tenant.slug;

    usuario = await criarUsuarioTeste(tenant.id, {
      email: "admin@teste.com",
      cargo: "admin",
      nome: "Admin Teste",
    });

    token = gerarTokenTeste(
      tenant.id,
      usuario.id,
      usuario.email,
      usuario.nome,
      "admin"
    );
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  it("Deve retornar 401 se o token não for fornecido", async () => {
    const response = await request(app)
      .post("/api/eventos") // Rota que usa o middleware
      .set("Host", `${tenantSlug}.lvh.me`);

    expect(response.status).toBe(401);
    expect(response.body.erro).toBe("Unauthorized");
    expect(response.body.mensagem).toBe("Token não fornecido");
  });

  it("Deve retornar 401 se o formato do token estiver incorreto", async () => {
    const response = await request(app)
      .post("/api/eventos") // Rota que usa o middleware
      .set("authorization", `Bearer${token}`) // Formato incorreto
      .set("Host", `${tenantSlug}.lvh.me`);

    expect(response.status).toBe(401);
    expect(response.body.erro).toBe("Unauthorized");
    expect(response.body.mensagem).toBe("Erro no formato do token");
  });

  it("Deve retornar 403 se o token não corresponder a um membro da empresa do slug", async () => {
    const tenantInvalido = await criarTenantTeste("ativo");
    const usuarioInvalido = await criarUsuarioTeste(tenantInvalido.id);
    const tokenInvalido = gerarTokenTeste(
      tenantInvalido.id,
      usuarioInvalido.id,
      usuarioInvalido.email,
      usuarioInvalido.nome,
      usuarioInvalido.cargo
    );

    const response = await request(app)
      .post("/api/eventos") // Rota que usa o middleware
      .set("authorization", `Bearer ${tokenInvalido}`)
      .set("Host", `${tenantSlug}.lvh.me`);

    expect(response.status).toBe(403);
    expect(response.body.erro).toBe("Forbidden");
    expect(response.body.mensagem).toBe(
      "Token de acesso não corresponde a empresa"
    );
  });
});
