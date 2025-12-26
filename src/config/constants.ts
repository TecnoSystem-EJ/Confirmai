import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export const DATABASE_URL = process.env.DATABASE_URL;
export const DATABASE_HOST = process.env.DATABASE_HOST;
export const DATABASE_USER = process.env.DATABASE_USER;
export const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD;
export const DATABASE_NAME = process.env.DATABASE_NAME;
export const DATABASE_PORT = process.env.DATABASE_PORT;

export const PORT = process.env.PORT;
export const JWT_SECRET: jwt.Secret = String(process.env.JWT_SECRET);
export const FRONTEND_URL =
  process.env.NODE_ENV === "development"
    ? process.env.FRONTEND_URL_DEV
    : process.env.FRONTEND_URL_PROD;
