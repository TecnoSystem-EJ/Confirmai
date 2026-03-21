import { RequestHandler } from "express"; 
import { prisma } from "../../config/database";

const validarCheckin: RequestHandler = async (req, res) => {

  const { hash } = req.body;

  const inscricao = await prisma.inscricoes.findFirst({
    where: {
      qr_hash: hash,
      tenantId: req.tenant!.id,
    },
    include: { evento: true, tenant: true },
  });

  if (!inscricao) {
    return res.status(404).json({ valido: false, message: "QR Code inválido" });
  }

  return res.status(200).json({
    valido: true,
    participante: {
      inscricaoId: inscricao.id,
      nome: inscricao.nome,
      email: inscricao.email,
      evento: inscricao.evento.titulo,
      tenant: inscricao.tenant.nome,
      checkinRealizado: inscricao.checkin_realizado,
    },
  });
};

export default validarCheckin;