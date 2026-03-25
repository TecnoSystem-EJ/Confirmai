import { RequestHandler } from "express"; 
import { prisma } from "../../config/database";

const confirmarCheckin: RequestHandler = async (req, res) => {
  const { inscricaoId } = req.body;

  const inscricao = await prisma.inscricoes.findUnique({
    where: { id: inscricaoId },
  });

  if (!inscricao) {
    return res.status(404).json({ message: "Inscrição não encontrada" });
  }

  if (inscricao.checkin_realizado) {
    return res.status(409).json({ message: "Check-in já realizado" });
  }

  const atualizada = await prisma.inscricoes.update({
    where: { id: inscricaoId },
    data: {
      checkin_realizado: true,
      checkin_data: new Date(),
    },
  });

  return res.status(200).json({
    message: "Check-in confirmado",
    checkinEm: atualizada.checkin_data,
  });
};

export default confirmarCheckin;