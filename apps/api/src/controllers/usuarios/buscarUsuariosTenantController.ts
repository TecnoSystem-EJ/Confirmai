import { RequestHandler } from "express";
import { prisma } from "../../config/database";
import { BuscarUsuariosResponseSchema } from "../../schemas/usuarios/buscarUsuariosSchema";

const buscarUsuariosTenant: RequestHandler<
  any,
  BuscarUsuariosResponseSchema,
  any,
  any
> = async (req, res) => {
  const usuarios = await prisma.usuarios.findMany({
    where: {
      tenantId: req.tenant!.id,
    },
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

export default buscarUsuariosTenant;
