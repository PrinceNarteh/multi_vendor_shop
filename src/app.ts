import express from "express";
import { config } from "dotenv";

const app = express();

if (process.env.NODE_ENV !== "production") {
  config({
    path: "./config/.env",
  });
}

export { app };
