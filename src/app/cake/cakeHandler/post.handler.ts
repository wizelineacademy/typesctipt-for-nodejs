import { Request, Response } from "express";

export const createCake = (req: Request, res: Response) => {
  return res.status(201).json({
    message: "Created",
  });
};
