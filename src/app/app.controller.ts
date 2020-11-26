import { Request, Response } from "express";

export const appGetHandler = (req: Request, res: Response) => {
  res.json({ body: 'You may wanna go to the `/cupcake` endpoint' });
};
