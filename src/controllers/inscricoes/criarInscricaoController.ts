import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { AppException } from "../../exceptions";
import {
  CriarInscricaoParamsSchema,
  CriarInscricaoRequestSchema,
  CriarInscricaoResponseSchema,
} from "../../schemas/inscricoes/criarInscricaoSchema";
import {
  verificarEventoEncerradoOuSemVagas,
  verificarEventoExistente,
} from "../../services/eventoService";

const criarInscricao: RequestHandler<
  CriarInscricaoParamsSchema,
  CriarInscricaoResponseSchema,
  CriarInscricaoRequestSchema,
  any
> = async (req, res) => {
  const { id: evento_id } = req.params; // pegar id da url de evento
  const { nome, email, curso } = req.body;

  //verifica se o evento existe
  const evento = await verificarEventoExistente(evento_id, req.tenant!.id);
  verificarEventoEncerradoOuSemVagas(evento);

  const usuarioInscrito = await prisma.inscricoes.findFirst({
    where: {
      eventoId: evento_id,
      tenantId: req.tenant!.id,
      email,
    },
  });

  if (usuarioInscrito) {
    throw new AppException(
      "Usuário já inscrito no evento",
      409,
      "Inscrição existente"
    );
  }

  // Criar a inscrição no banco de dados
  const novaInscricao = await prisma.inscricoes.create({
    data: {
      eventoId: evento_id,
      tenantId: req.tenant!.id,
      nome,
      email,
      curso,
    },
    include: {
      evento: true,
    },
  });

  await prisma.eventos.update({
    where: {
      id: evento_id,
      tenantId: req.tenant!.id,
    },
    data: {
      numeroInscritos: {
        increment: 1,
      },
    },
  });

  //retorna a inscrição criada
  return res.status(201).json({
    mensagem: "Inscrição realizada com sucesso!",
    inscricao: novaInscricao,
  });
};

export default criarInscricao;
