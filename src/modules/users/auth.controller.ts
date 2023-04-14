import { Request, RequestHandler, Response } from "express";

export const register: RequestHandler = async (req: Request, res: Response) => {
  try {
    res.status(201).json(req.body);
  } catch (error) {}
};
