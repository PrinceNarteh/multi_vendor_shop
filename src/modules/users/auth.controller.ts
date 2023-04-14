import { Request, RequestHandler, Response } from "express";
import { createUserSchema } from "./user.schema";

export const register: RequestHandler = async (req: Request, res: Response) => {
  try {
    const response = await createUserSchema.safeParseAsync(req.body);
    if (!response.success) {
      const errors = response.error.errors.map((error) => ({
        path: error.path[0],
        message: error.message,
      }));
      console.log(errors);
    }
    res.status(201).json({ token: "user created" });
  } catch (error) {}
};
