import express from "express";
import * as dotenv from "dotenv";

const app = express();

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "./src/config/.env",
  });
}



export { app };
