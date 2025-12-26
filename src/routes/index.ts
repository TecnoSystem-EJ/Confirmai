import { Router } from "express";
import eventosRoutes from "./eventosRoutes";
import inscricoesRoutes from "./inscricoesRoutes";
import usuariosRoutes from "./usuariosRoutes";

const routes = Router({ mergeParams: true });

routes.get("/", (_req, res) => {
  res.send(`Servidor rodando na porta ${process.env.PORT}`);
});

routes.use("/eventos", eventosRoutes);
routes.use("/usuarios", usuariosRoutes);
routes.use("/inscricoes", inscricoesRoutes);

export default routes;
