import bcryptjs from "bcryptjs";
import { RequestHandler } from "express";
import jwt from "jsonwebtoken";
import { JWT_SECRET } from "../../config/constants";
import { prisma } from "../../config/database";
import { NaoAutorizadoException } from "../../exceptions";
import {
  LoginUsuarioRequestSchema,
  LoginUsuarioResponseSchema,
} from "../../schemas/usuarios/loginUsuarioSchema";

const loginUsuario: RequestHandler<
  any,
  LoginUsuarioResponseSchema,
  LoginUsuarioRequestSchema,
  any
> = async (req, res) => {
  const { email, senha } = req.body;

  const usuario = await prisma.usuarios.findFirst({ where: { email } });

  if (!usuario) throw new NaoAutorizadoException("email/senha incorreta");

  const senhaValida = await bcryptjs.compare(senha, usuario.senhaHash);

  if (!senhaValida) throw new NaoAutorizadoException("email/senha incorreta");

  const { senhaHash, ...usuarioSemSenha } = usuario;

  const token = jwt.sign(
    {
      id: usuario.id,
      nome: usuario.nome,
      email: usuario.email,
      cargo: usuario.cargo,
    },
    JWT_SECRET,
    { expiresIn: "1d" }
  );

  const expiraEm = new Date();
  expiraEm.setHours(expiraEm.getHours() + 24);

  return res.status(200).json({
    usuario: usuarioSemSenha,
    token,
    expira_em: expiraEm.toLocaleString(),
  });
};

export default loginUsuario;
