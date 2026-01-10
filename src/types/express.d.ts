declare global {
  namespace Express {
    interface Request {
      user?: {
        id: string;
        nome: string;
        email: string;
        cargo: "admin" | "membro" | "global_admin";
        tenant?: {
          id: string;
        };
      };
      tenant?: {
        id: string;
        nome: string;
        slug: string;
        status: "ativo" | "cancelado" | "suspenso";
      };
    }
  }
}

export {};
