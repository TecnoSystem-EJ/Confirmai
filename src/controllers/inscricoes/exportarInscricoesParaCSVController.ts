import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { NaoEncontradoException } from "../../exceptions";
import {
  ExportarInscricoesParaCSVParamsSchema,
  ExportarInscricoesParaCSVResponseSchema,
} from "../../schemas/inscricoes/exportarInscricoesParaCSVSchema";
import { verificarEventoExistente } from "../../services/eventoService";
import exportToCSV from "../../utils/exportCSV";

const exportarInscricoesParaCSV: RequestHandler<
  ExportarInscricoesParaCSVParamsSchema,
  ExportarInscricoesParaCSVResponseSchema,
  any,
  any
> = async (req, res) => {
  const { id: evento_id } = req.params; // pegar id da url de evento

  //verifica se o evento existe
  await verificarEventoExistente(evento_id);

  const inscricoes = await prisma.inscricoes.findMany({
    where: { eventoId: evento_id },
  });

  if (inscricoes.length === 0) {
    throw new NaoEncontradoException(
      "Nenhuma inscrição encontrado para o evento"
    );
  }

  //define as colunas do csv
  const fields = ["id", "nome", "email", "curso", "status", "createdAt"];
  const fileName = `inscricoes_evento_${evento_id}.csv`;

  const csv = exportToCSV(fields, inscricoes);

  //configura o cabeçalho da resposta para download
  res.header("Content-Type", "text/csv");
  res.attachment(fileName); // nome do arquivo
  return res.status(200).send(csv); // envia o arquivo
};

export default exportarInscricoesParaCSV;
