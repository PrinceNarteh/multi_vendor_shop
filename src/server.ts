import * as dotenv from "dotenv";
import { app } from "./app";
const PORT = process.env.PORT || 4000;

// Handle uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down server for uncaught exception`);
});

// config
if (process.env.NODE_ENV !== "production") {
  dotenv.config();
}

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
