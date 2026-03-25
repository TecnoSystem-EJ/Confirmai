import nodemailer from "nodemailer";
import { prisma } from "../config/database";

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: Number(process.env.EMAIL_PORT),
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

 // Função com retry automático para caso der erro no envio do email

export async function enviarEmailInscricao(
  inscricaoId: string,
  destino: string,
  nome: string,
  qrCodeBase64: string,
  evento: string
) {
  const MAX_TENTATIVAS = 3;

  for (let tentativa = 1; tentativa <= MAX_TENTATIVAS; tentativa++) {
    try {
      await transporter.sendMail({
        from: '"Confirma Aí" <no-reply@confirmai.com>',
        to: destino,
        subject: "Sua inscrição foi confirmada 🎉",
        html: `
          <h2>Olá, ${nome}!</h2>
          <p>Sua inscrição foi confirmada no evento: ${evento}</p>
          <p>Apresente este QR Code:</p>
          <img src="${qrCodeBase64}" />
        `,
      });

      // Email enviado com sucesso, muda o status no banco
      await prisma.inscricoes.update({
        where: { id: inscricaoId },
        data: {
          email_status: "enviado",
          email_tentativas: tentativa,
          email_ultimo_erro: null,
        },
      });

      console.log("Email enviado com sucesso");
      return;

    } catch (error: any) {
      console.error(`Tentativa ${tentativa} falhou:`, error.message);

      // salva tentativa
      await prisma.inscricoes.update({
        where: { id: inscricaoId },
        data: {
          email_status: "falhou",
          email_tentativas: tentativa,
          email_ultimo_erro: error.message,
        },
      });

      // espera antes de tentar de novo
      await new Promise(r => setTimeout(r, 2000));
    }
  }

  console.error("Todas as tentativas de envio falharam");
}