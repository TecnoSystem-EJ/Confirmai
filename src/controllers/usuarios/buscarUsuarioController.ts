import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { NaoEncontradoException } from "../../exceptions";
import { BuscarUsuarioResponseSchema } from "../../schemas/usuarios/buscarUsuarioSchema";

const buscarUsuario: RequestHandler<
  any,
  BuscarUsuarioResponseSchema,
  any,
  any
> = async (req, res) => {
  const usuario = await prisma.usuarios.findUnique({
    where: {
      id: req.user!.id,
    },
    omit: {
      senhaHash: true,
    },
  });

  if (!usuario) {
    throw new NaoEncontradoException("Usuário não encontrado");
  }

  return res.status(200).json(usuario);
};

export default buscarUsuario;
