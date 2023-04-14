import { NextFunction, Request, Response } from "express";
import { ZodType } from "zod";

export function validateInputs<T>(schema: ZodType<T>) {
  return async (req: Request, res: Response, next: NextFunction) => {
    const response = await schema.safeParseAsync(req.body);
    if (!response.success) {
      const errors = response.error.errors.map((error) => ({
        path: error.path[0],
        message: error.message,
      }));
      res.status(400).json({ errors });
    } else {
      req.body = { ...response.data };
      next();
    }
  };
}
