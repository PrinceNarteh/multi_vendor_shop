import { app } from "./app";
import * as dotenv from "dotenv";
import { connectDB } from "./config/connectDb";
const PORT = process.env.PORT || 4000;

// Handle uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server for uncaught exception`);
});

// config
console.log(process.cwd());
if (process.env.NODE_ENV !== "production") {
  dotenv.config({
    path: "./src/config/.env",
  });
}

// connect to database
console.log(process.env.PORT);
connectDB();

// create server
const server = app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

// unhandled promise rejection
process.on("unhandledRejection", (err: any) => {
  console.log(`Shutting down server for ${err.message}`);
  console.log(`Shutting down server for unhandled promise rejection`);

  server.close(() => {
    process.exit(1);
  });
});
