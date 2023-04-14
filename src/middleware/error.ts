import { Request, Response, NextFunction } from "express";
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
