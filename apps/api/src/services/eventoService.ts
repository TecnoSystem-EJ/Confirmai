import crypto from "crypto";
import { eventosModel } from "../../generated/prisma/models";
import { prisma } from "../config/database";
import {
  ConflitoException,
  NaoAutorizadoException,
  NaoEncontradoException,
} from "../exceptions";

export const generateSlug = (title: string): string => {
  return `${title
    .toLowerCase()
    .normalize("NFD") // Remove acentos
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^\w\s-]/g, "") // Remove caracteres especiais
    .replace(/\s+/g, "-") // Espaços viram hífens
    .replace(/-+/g, "-") // Remove hífens duplicados
    .trim()}-${crypto.randomBytes(4).toString("hex")}`;
};

export const verificarEventoExistente = async (
  id: string,
  tenantId: string
) => {
  const evento = await prisma.eventos.findUnique({
    where: {
      id,
      tenantId,
    },
  });

  if (!evento) {
    throw new NaoEncontradoException("Evento não encontrado");
  }

  if (evento.status !== "ativo") {
    throw new NaoAutorizadoException("Evento não ativo");
  }

  return evento;
};

export const verificarEventoEncerradoOuSemVagas = async (
  evento: eventosModel
) => {
  if (
    new Date() > evento.closingDate ||
    (evento.limiteVagas && evento.numeroInscritos >= evento.limiteVagas)
  ) {
    if (new Date() > evento.closingDate && evento.status === "ativo") {
      await prisma.eventos.update({
        where: { id: evento.id },
        data: {
          status: "encerrado",
        },
      });
    }

    throw new ConflitoException(
      "Evento com inscrições encerradas ou sem vagas"
    );
  }
};
