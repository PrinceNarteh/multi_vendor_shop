import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
import express from "express";
import fileUpload from "express-fileupload";
import ErrorHandler from "./utils/errorHandler";
import { authRouter } from "./modules/users/user.routes";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

app.use("/auth", authRouter);

// Error handling
// app.use(ErrorHandler);

export { app };
