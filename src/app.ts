import cors from "cors";
import express from "express";
import { FRONTEND_URL } from "./config/constants";
import { lidarErroMiddleware, naoEncontradoMiddleware } from "./middlewares";
import routes from "./routes";

const app = express();

app.use(
  cors({
    origin: FRONTEND_URL,
  })
);
app.use(express.json());

app.use("/api", routes);

app.use(naoEncontradoMiddleware);
app.use(lidarErroMiddleware);

export default app;
