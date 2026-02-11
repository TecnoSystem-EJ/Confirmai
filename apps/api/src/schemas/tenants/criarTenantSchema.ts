import z from "zod";
import { generateSlug } from "../../services/eventoService";
import { verificarCNPJ } from "../../services/tenantService";
import usuarioSchema from "../usuarios/usuarioSchema";
import tenantScehma from "./tenantSchema";

const criarTenantSchema = z.object({
  request: z
    .object({
      nome: z
        .string("O campo 'nome' deve ser uma string")
        .nonempty("O campo 'nome' não pode ser vazio")
        .nonoptional("O campo 'nome' é obrigatório")
        .openapi({ description: "Nome da tenant", example: "Tenant teste" }),
      slug: z
        .string("O campo 'slug' deve ser uma string")
        .nonempty("O campo 'slug' não pode ser vazio")
        .nonoptional("O campo 'slug' é obrigatório")
        .openapi({ description: "Slug da tenant", example: "slug-teste" }),
      cnpj: z
        .string("O campo 'cnpj' deve ser uma string")
        .nonempty("O campo 'cnpj' não pode ser vazio")
        .nonoptional("O campo 'cnpj' é obrigatório")
        .refine(
          (cnpj) => {
            return verificarCNPJ(cnpj);
          },
          { error: "Cnpj mal formatado" }
        )
        .openapi({
          description: "CNPJ da tenant",
          example: "XX.XXX.XXX/0001-XX",
        }),
      telefone: z
        .string("O campo 'cnpj' deve ser uma string")
        .nonempty("O campo 'cnpj' não pode ser vazio")
        .nonoptional("O campo 'cnpj' é obrigatório")
        .refine(
          (cnpj) => {
            return /^(?:\+55\s?)?(?:\(?[1-9][0-9]\)?\s?)?(?:9?\d{4})-?\d{4}$/.test(
              cnpj
            );
          },
          { error: "Telefone mal formatado" }
        )
        .openapi({
          description: "Telefone da tenant",
          example: "(XX) XXXXX-XXXX",
        }),
      email: z
        .email("O campo 'email' deve ser um email válido")
        .nonoptional("O campo 'email' é obrigatório")
        .transform((email) => email.trim().toLowerCase())
        .openapi({
          description: "E-mail da tenant",
          example: "hello@example.com",
        }),
      site: z
        .url("O campo 'site' deve ser uma url válida")
        .transform((email) => email.trim().toLowerCase())
        .optional()
        .openapi({
          description: "URL do site da tenant",
          example: "https://site-tenant.com",
        }),
      logoUrl: z
        .url("O campo 'logoUrl' deve ser uma url válida")
        .transform((logoUrl) => logoUrl.trim().toLowerCase())
        .optional()
        .openapi({
          description: "URL da logo da tenant",
          example: "https://logo.com",
        }),
      adminNome: z
        .string("O campo 'nome' deve ser uma string")
        .nonempty("O campo 'nome' não pode ser vazio")
        .nonoptional("O campo 'nome' é obrigatório")
        .transform((nome) =>
          nome
            .trim()
            .replace(/\s+/g, " ")
            .split(" ")
            .map(
              (palavra) =>
                palavra.charAt(0).toUpperCase() + palavra.substring(1)
            )
            .join(" ")
        )
        .openapi({
          description: "Nome do usuário admin",
          example: "Admin teste",
        }),
      adminEmail: z
        .email("O campo 'email' deve ser um email válido")
        .nonoptional("O campo 'email' é obrigatório")
        .transform((email) => email.trim().toLowerCase())
        .openapi({
          description: "E-mail do usuário",
          example: "hello@example.com",
        }),
      adminSenha: z
        .string("O campo 'senha' deve ser uma string")
        .min(6, "O campo 'senha' deve ter no mínimo 6 caracteres")
        .max(20, "O campo 'senha' deve ter no máximo 20 caracteres")
        .nonoptional("O campo 'senha' é obrigatório")
        .openapi({
          description: "Senha do usuário admin",
          example: "admin123",
        }),
    })
    .strict(),
  response: z
    .object({
      mensagem: z.string().openapi({
        description: "Mensagem de sucesso da criação",
        example: "Tenant criado com sucesso",
      }),
      tenant: tenantScehma,
      admin: usuarioSchema,
      acesso_url: z.url().openapi({
        description: "URL de acesso a tenant",
        example: generateSlug("slug-teste"),
      }),
    })
    .strict(),
});

export type CriarTenantRequestSchema = z.infer<
  typeof criarTenantSchema.shape.request
>;

export type CriarTenantResponseSchema = z.infer<
  typeof criarTenantSchema.shape.response
>;

export default criarTenantSchema;
