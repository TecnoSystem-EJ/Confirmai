import Decimal from "decimal.js";
import { SERVICE_FEE } from "../config/constants";
import { prisma } from "../config/database";
import { AppException, NaoEncontradoException } from "../exceptions";

export const verificarTipoIngressoExistente = async (tipoId: string) => {
  const tipoExistente = await prisma.ticketType.findUnique({
    where: { id: tipoId },
  });

  if (!tipoExistente) {
    throw new NaoEncontradoException("Tipo de ingresso não encontrado.");
  }

  return tipoExistente;
};

export const verificarTipoIngressoExistenteNoLote = async (
  tipoId: string,
  loteId: string,
) => {
  const tipoExistente = await prisma.batchTicket.findUnique({
    where: { batchId_ticketTypeId: { batchId: loteId, ticketTypeId: tipoId } },
  });

  if (tipoExistente) {
    throw new AppException(
      "Este tipo de ingresso já foi adicionado a este lote.",
      400,
      "Bad Request",
    );
  }
};

export const calcularPrecoComTaxa = (preco: number | Decimal) => {
  const precoDecimal = new Decimal(preco);
  const taxaDecimal = new Decimal(SERVICE_FEE).toDecimalPlaces(2);
  const precoComTaxa = precoDecimal
    .plus(precoDecimal.times(taxaDecimal.dividedBy(100)))
    .toDecimalPlaces(2)
    .toNumber();
  return {
    serviceFee: taxaDecimal.toNumber(),
    priceWithServiceFee: precoComTaxa,
  };
};
