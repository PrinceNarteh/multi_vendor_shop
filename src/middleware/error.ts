import { Request, Response, NextFunction } from "express";
import { Error } from "mongoose";
import { MongoError } from "mongodb";
import { JsonWebTokenError, TokenExpiredError } from "jsonwebtoken";
import ErrorHandler from "../utils/errorHandler";

export default function (
  err: unknown,
  req: Request,
  res: Response,
  next: NextFunction
) {
  if (err instanceof ErrorHandler) {
    err.statusCode = err.statusCode || 500;
    err.message = err.message || "Internal Server Error";
  }

  // wrong mongodb id error
  if (err instanceof Error.CastError && err.name === "CastError") {
    const message = `Resources not found with this id. Invalid ${err.path}`;
    err = new ErrorHandler(message, 400);
  }

  // duplicate key error
  if ((err as MongoError).code === 11000) {
    const message = `Duplicate key ${Object.keys(
      (err as any).keyValue
    )} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // wrong jwt error
  if (err instanceof JsonWebTokenError) {
    const message = "Your url is invalid. Please try again";
    err = new ErrorHandler(message, 400);
  }

  //jwt expired
  if (err instanceof TokenExpiredError) {
    const message = `Your url is expired. Please login`;
    err = new ErrorHandler(message, 400);
  }

  // return error
  res.status((err as ErrorHandler).statusCode).json({
    success: false,
    message: (err as ErrorHandler).message,
  });
}
