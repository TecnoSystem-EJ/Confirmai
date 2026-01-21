import z from "zod";

const statusInscricaoEnumSchema = z
  .enum(
    ["pendente", "confirmada", "cancelada"],
    "O campo 'status' deve ser 'pendente', 'confirmada' ou 'cancelada'"
  )
  .nonoptional("O campo 'status' é obrigatório")
  .openapi({
    description: "Status da inscrição",
    examples: ["pendente", "confirmada", "cancelada"],
  });

export default statusInscricaoEnumSchema;
