import bcryptjs from "bcryptjs";
import {
  GLOBAL_ADMIN_EMAIL,
  GLOBAL_ADMIN_NOME,
  GLOBAL_ADMIN_SENHA,
} from "./constants";
import { prisma } from "./database";

const ticketTypes = [
  {
    name: "Inteira",
    description: "Ingresso valor integral",
  },
  {
    name: "Meia Entrada",
    description:
      "Estudantes, idosos, PCD (conforme lei 12.933/2013). Apresentar documento comprobatório na entrada.",
  },
  {
    name: "VIP",
    description: "Acesso a áreas exclusivas",
  },
  {
    name: "Camarote",
    description: "Área premium com serviços diferenciados",
  },
  {
    name: "Pista",
    description: "Área comum do evento",
  },
  {
    name: "Backstage",
    description: "Acesso aos bastidores",
  },
  {
    name: "Cortesia",
    description: "Ingresso gratuito",
  },
];

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

  for (const type of ticketTypes) {
    const exists = await prisma.ticketType.findFirst({
      where: { name: type.name },
    });

    if (!exists) {
      await prisma.ticketType.create({
        data: type,
      });
      console.info(`TicketType ${type.name} criado`);
    }
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
