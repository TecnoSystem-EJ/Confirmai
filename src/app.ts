import { apiReference } from "@scalar/express-api-reference";
import cors from "cors";
import express from "express";
import { FRONTEND_URL } from "./config/constants";
import { generateOpenAPI } from "./docs/openapi";
import { ProibidoException } from "./exceptions";
import { lidarErroMiddleware, naoEncontradoMiddleware } from "./middlewares";
import routes from "./routes";

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      if (
        origin?.includes("localhost") ||
        origin?.includes("lvh.me") ||
        origin === FRONTEND_URL
      ) {
        callback(null, true);
      } else {
        callback(new ProibidoException("URL bloqueado pelo cors"));
      }
    },
  })
);
app.use(express.json());

app.use(
  "/docs",
  apiReference({
    spec: {
      content: generateOpenAPI(),
    },
    theme: "purple",
  })
);

app.use("/api", routes);

app.use(naoEncontradoMiddleware);
app.use(lidarErroMiddleware);

export default app;
