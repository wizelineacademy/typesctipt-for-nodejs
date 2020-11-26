import { Request, Response } from "express";

export const cupcakeGetHandler = (req: Request, res: Response) => {
  res.json({ body: 'Hello Cupcake!' });
};
