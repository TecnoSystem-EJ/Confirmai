import bcryptjs from "bcryptjs";
import {
  GLOBAL_ADMIN_EMAIL,
  GLOBAL_ADMIN_NOME,
  GLOBAL_ADMIN_SENHA,
} from "./constants";
import { prisma } from "./database";

const seed = async () => {
  const adminExistente = await prisma.usuarios.findFirst({
    where: {
      email: GLOBAL_ADMIN_EMAIL,
    },
  });

  if (!adminExistente) {
    const senhaHash = await bcryptjs.hash(GLOBAL_ADMIN_SENHA, 10);

    await prisma.usuarios.create({
      data: {
        nome: GLOBAL_ADMIN_NOME,
        email: GLOBAL_ADMIN_EMAIL,
        senhaHash,
        cargo: "global_admin",
      },
    });

    console.info("Global admin criado");
  }
};

if (process.argv[1] === import.meta.filename) {
  seed()
    .then(async () => {
      await prisma.$disconnect();
    })
    .catch(async (e) => {
      console.error(e);
      await prisma.$disconnect();
      process.exit(1);
    });
}


export default seed;
