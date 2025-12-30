import "express-async-errors";
import app from "./app";
import { PORT } from "./config/constants";

app.listen(PORT, (error) => {
  if (error) {
    console.warn(`Falha ao iniciar servidor na porta ${PORT}`);
  }

  console.info(`Servidor rodando na porta ${PORT}`);
});
