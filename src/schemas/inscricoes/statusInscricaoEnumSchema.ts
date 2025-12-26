import z from "zod";

const statusInscricaoEnumSchema = z
  .enum(
    ["pendente", "confirmada", "cancelada"],
    "O campo 'status' deve ser 'pendente', 'confirmada' ou 'cancelada'"
  )
  .nonoptional("O campo 'status' é obrigatório");

export default statusInscricaoEnumSchema;
