type CargoUsuario = "admin" | "membro";

declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        nome: string;
        email: string;
        cargo: CargoUsuario;
      };
    }
  }
}

export {};
