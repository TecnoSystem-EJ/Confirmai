import { prisma } from "../../config/database";
import { NaoEncontradoException } from "../../exceptions";
import { verificarEventoExistente } from "../../services/eventoService";
import exportToCSV from "../../utils/exportCSV";
import { Response, Request } from "express";


export async function dasboardExportarEventosController(
    req: Request, 
    res: Response
) {
    const eventoId = req.params.eventoId;

    await verificarEventoExistente(eventoId, req.tenant!.id);

    const eventos = await prisma.evento.findMany({
         where: {tenant_id: req.tenant!.id },
    });

    if (eventos.length === 0) {
    throw new NaoEncontradoException(
      "Nenhum evento encontrado para o evento"
    );
  }

    //define as colunas do csv
    const fields = ["id", "titulo", "descricao", "link_slug", "closing_date", "status", "created_at", "updated_at"];
    const fileName = `eventos_${req.tenant!.nome}.csv`;

    const csv = exportToCSV(fields, eventos);

  //configura o cabeçalho da resposta para download
    res.header("Content-Type", "text/csv");
    res.attachment(fileName); // nome do arquivo
    return res.status(200).send(csv); // envia o arquivo

}