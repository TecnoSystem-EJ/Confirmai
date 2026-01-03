import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const DATABASE_URL = String(process.env.DATABASE_URL);
export const DATABASE_HOST = String(process.env.DATABASE_HOST);
export const DATABASE_USER = String(process.env.DATABASE_USER);
export const DATABASE_PASSWORD = String(process.env.DATABASE_PASSWORD);
export const DATABASE_NAME = String(process.env.DATABASE_NAME);
export const DATABASE_PORT = String(process.env.DATABASE_PORT);

export const PORT = String(process.env.PORT);
export const JWT_SECRET: jwt.Secret = String(process.env.JWT_SECRET);
export const FRONTEND_URL =
  process.env.NODE_ENV === "development"
    ? String(process.env.FRONTEND_URL_DEV)
    : String(process.env.FRONTEND_URL_PROD);

export const GLOBAL_ADMIN_SENHA = String(process.env.GLOBAL_ADMIN_SENHA);
export const GLOBAL_ADMIN_EMAIL = String(process.env.GLOBAL_ADMIN_EMAIL);
export const GLOBAL_ADMIN_NOME = String(process.env.GLOBAL_ADMIN_NOME);
