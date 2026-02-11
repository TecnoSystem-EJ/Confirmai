import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { BuscarUsuariosResponseSchema } from "../../schemas/usuarios/buscarUsuariosSchema";

const buscarUsuarios: RequestHandler<
  any,
  BuscarUsuariosResponseSchema,
  any,
  any
> = async (_req, res) => {
  const usuarios = await prisma.usuarios.findMany({
    include: {
      tenant: {
        select: {
          nome: true,
          slug: true,
        },
      },
    },
    omit: {
      senhaHash: true,
    },
  });

  return res.status(200).json(usuarios);
};

export default buscarUsuarios;
