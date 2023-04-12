import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    const DB_URL = process.env.DB_URL;
    if (!DB_URL) {
      throw new Error("Database URL is not provided.");
    }
    await mongoose.connect(DB_URL);
    console.log("Database connected successfully.");
  } catch (error) {
    console.log("Error connecting database");
    process.exitCode = 1;
  }
};
