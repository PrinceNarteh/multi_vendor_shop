import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import * as dotenv from "dotenv";
import * as express from "express";
import fileUpload from "express-fileupload";
import ErrorHandler from "./utils/errorHandler";

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(fileUpload({ useTempFiles: true }));

if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "./src/config/.env",
  });
}

// Error handling
app.use(ErrorHandler);

export { app };
