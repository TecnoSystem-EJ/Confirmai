import "express-async-errors";
import app from "./app";
import { PORT } from "./config/constants";
import seed from "./config/seed";

app.listen(PORT, async (error) => {
  if (error) {
    console.warn(`Falha ao iniciar servidor na porta ${PORT}`);
  }
  await seed();
  console.info(`Servidor rodando na porta ${PORT}`);
});
