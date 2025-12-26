import { Parser } from "json2csv";
import { inscricoesModel } from "../../generated/prisma/models";

function exportToCSV(fields: string[], data: inscricoesModel[]) {
  //cria o conversor de json para csv
  const json2csvParser = new Parser({ fields });
  const csv = json2csvParser.parse(data);

  return csv;
}

export default exportToCSV;
