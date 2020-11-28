import { Request, RequestHandler, Response } from "express";
import { createCake } from "../cake.service";

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const cake = await createCake(req.body);
    res.json({ data: cake });
  },
];
