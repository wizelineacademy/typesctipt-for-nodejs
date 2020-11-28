import { Request, RequestHandler, Response } from "express";
import { updateCake } from "../cake.service";

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const cake = await updateCake(req.body.id, req.body);
    res.json({ data: cake });
  },
];
