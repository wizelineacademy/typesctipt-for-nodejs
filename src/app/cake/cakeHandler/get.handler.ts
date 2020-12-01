import { Request, RequestHandler, Response } from "express";
import { getCakes } from "../cake.service";

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const cakes = await getCakes();
    res.json({ data: cakes });
  },
];
