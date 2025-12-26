import bcryptjs from "bcryptjs";
import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { AppException } from "../../exceptions";
import {
  RegistrarUsuarioRequestSchema,
  RegistrarUsuarioResponseSchema,
} from "../../schemas/usuarios/registrarUsuarioSchema";

const registrarUsuario: RequestHandler<
  any,
  RegistrarUsuarioResponseSchema,
  RegistrarUsuarioRequestSchema,
  any
> = async (req, res) => {
  const { nome, email, senha, cargo } = req.body;

  const usuarioExistente = await prisma.usuarios.findFirst({
    where: {
      email: email,
    },
  });

  if (usuarioExistente) {
    throw new AppException(
      "Usuário já cadastrado com esse email",
      409,
      "Usuário cadastrado"
    );
  }

  const senhaHash = await bcryptjs.hash(senha, 10);

  const novoUsuario = await prisma.usuarios.create({
    data: {
      nome,
      email,
      senhaHash,
      cargo,
    },
    omit: {
      senhaHash: true,
    },
  });

  return res.status(201).json({
    mensagem: "Usuario cadastrado com sucesso!",
    usuario: novoUsuario,
  });
};

export default registrarUsuario;
