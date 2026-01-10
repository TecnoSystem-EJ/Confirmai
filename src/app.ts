import { apiReference } from "@scalar/express-api-reference";
import cors from "cors";
import express from "express";
import "express-async-errors";
import { FRONTEND_URL } from "./config/constants";
import { generateOpenAPI } from "./docs/openapi";
import { ProibidoException } from "./exceptions";
import { lidarErroMiddleware, naoEncontradoMiddleware } from "./middlewares";
import routes from "./routes";

const app = express();

app.use(
  cors({
    origin: (origin, callback) => {
      console.info(origin);
      if (
        !origin ||
        origin?.includes("localhost") ||
        origin?.includes("lvh.me") ||
        origin === FRONTEND_URL
      ) {
        callback(null, origin);
      } else {
        callback(new ProibidoException("URL bloqueado pelo cors"));
      }
    },
    credentials: true,
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
