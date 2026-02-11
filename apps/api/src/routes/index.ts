import { Router } from "express";
import { identificarTenantMiddleware } from "../middlewares";
import eventosRoutes from "./eventosRoutes";
import inscricoesRoutes from "./inscricoesRoutes";
import tenantsRoutes from "./tenantsRoutes";
import usuariosRoutes from "./usuariosRoutes";

const routes = Router({ mergeParams: true });

routes.get("/", (_req, res) => {
  res.send(`Servidor rodando na porta ${process.env.PORT}`);
});

routes.use("/tenants", tenantsRoutes);

routes.use(identificarTenantMiddleware);

routes.use("/eventos", eventosRoutes);
routes.use("/usuarios", usuariosRoutes);
routes.use("/inscricoes", inscricoesRoutes);

export default routes;
