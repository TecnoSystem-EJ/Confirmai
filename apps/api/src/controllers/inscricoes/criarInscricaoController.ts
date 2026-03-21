import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { ConflitoException } from "../../exceptions";
import {
  CriarInscricaoParamsSchema,
  CriarInscricaoRequestSchema,
  CriarInscricaoResponseSchema,
} from "../../schemas/inscricoes/criarInscricaoSchema";
import {
  verificarEventoEncerradoOuSemVagas,
  verificarEventoExistente,
} from "../../services/eventoService";

import { gerarCredenciaisIncricao } from "../../services/credenciaisInscricoesService";

import { enviarEmailInscricao } from "../../services/enviarQrCodePorEmailService";

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

  const { hash, qrCode } = await gerarCredenciaisIncricao();


  const usuarioInscrito = await prisma.inscricoes.findFirst({
    where: {
      eventoId: evento_id,
      tenantId: req.tenant!.id,
      email,
    },
  });

  if (usuarioInscrito) {
    throw new ConflitoException("Usuário já inscrito no evento");
  }

  // Criar a inscrição no banco de dados
  const novaInscricao = await prisma.inscricoes.create({
    data: {
      eventoId: evento_id,
      tenantId: req.tenant!.id,
      qr_hash: hash,
      qr_code: qrCode,
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

  await enviarEmailInscricao(novaInscricao.id, email, nome, qrCode, evento.titulo);

  //retorna a inscrição criada
  return res.status(201).json({
    mensagem: "Inscrição realizada com sucesso!",
    inscricao: novaInscricao,
  });
};

export default criarInscricao;
