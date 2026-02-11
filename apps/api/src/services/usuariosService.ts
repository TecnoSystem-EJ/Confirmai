import { prisma } from "../config/database";
import { NaoEncontradoException } from "../exceptions";

export const verificarUsuarioExistente = async (id: string) => {
  const usuario = await prisma.usuarios.findUnique({
    where: { id },
  });

  if (!usuario) {
    throw new NaoEncontradoException("Usuário não encontrada");
  }

  return usuario;
};
