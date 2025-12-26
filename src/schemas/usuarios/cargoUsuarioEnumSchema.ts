import z from "zod";

const cargoUsuarioEnumSchema = z
  .enum(["admin", "membro"], "O campo 'cargo' deve ser 'admin' ou 'membro'")
  .nonoptional("O campo 'cargo' é obrigatório");

export default cargoUsuarioEnumSchema;
