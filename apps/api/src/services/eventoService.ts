import crypto from "crypto";
import { prisma } from "../config/database";
import { ConflitoException, NaoEncontradoException } from "../exceptions";
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
  tenantId: string,
) => {
  const evento = await prisma.eventos.findUnique({
    where: { id, tenantId },
  });

  if (!evento) {
    throw new NaoEncontradoException("Evento não encontrado");
  }

  if (new Date() > evento.closingDate && evento.status !== "encerrado") {
    await desativarLotesDeEventoEncerrado(evento.id);
    return await prisma.eventos.update({
      where: { id, tenantId },
      data: {
        status: "encerrado",
      },
    });
  }

  return evento;
};

export const desativarLotesDeEventoEncerrado = async (id: string) => {
  await prisma.batchTicket.updateMany({
    where: {
      batch: {
        eventId: id,
      },
    },
    data: {
      isActive: false,
    },
  });

  await prisma.batch.updateMany({
    where: {
      eventId: id,
    },
    data: {
      isActive: false,
    },
  });
};

export const verificarEventoEncerrado = async (
  id: string,
  closingDate: Date,
  status: "ativo" | "rascunho" | "encerrado",
) => {
  if (new Date() > closingDate && status !== "encerrado") {
    const updatedEvent = await prisma.eventos.update({
      where: { id },
      data: {
        status: "encerrado",
      },
    });
    return updatedEvent.status === "encerrado";
  }
  return status === "encerrado";
};

export const calcularLoteOrder = async (eventId: string) => {
  const aggregate = await prisma.batch.aggregate({
    _max: { order: true },
    where: {
      eventId,
    },
  });

  const max = aggregate._max.order ?? -1;

  return max + 1;
};

export const verificarTrocaLoteOrder = async (
  eventId: string,
  novoOrder: number,
) => {
  const aggregate = await prisma.batch.aggregate({
    _max: { order: true },
    where: {
      eventId,
    },
  });

  const maxOrder = aggregate._max.order ?? 0;

  if (novoOrder > maxOrder || novoOrder < 0) {
    throw new ConflitoException("Ordem de lote inválida");
  }
};

export const verificarLoteExistente = async (
  eventId: string,
  loteId: string,
) => {
  const lote = await prisma.batch.findUnique({
    where: {
      id: loteId,
      eventId,
    },
  });

  if (!lote) {
    throw new NaoEncontradoException("Lote não encontrado");
  }

  return lote;
};

export const buscarEventoDetalhado = async (id: string, tenantId: string) => {
  const evento = await prisma.eventos.findUnique({
    where: { id, tenantId },
    include: {
      batches: {
        include: {
          batchTickets: {
            include: {
              ticketType: true,
            },
          },
        },
      },
    },
  });

  if (!evento) {
    throw new NaoEncontradoException("Evento não encontrado.");
  }

  if (new Date() > evento.closingDate) {
    await desativarLotesDeEventoEncerrado(evento.id);
    return await prisma.eventos.update({
      where: { id, tenantId },
      data: {
        status: "encerrado",
      },
      include: {
        batches: {
          include: {
            batchTickets: {
              include: {
                ticketType: true,
              },
            },
          },
        },
      },
    });
  }

  return evento;
};
