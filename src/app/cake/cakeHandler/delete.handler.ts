import { Request, RequestHandler, Response } from "express";
import { deleteCake } from "../cake.service";

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const cake = await deleteCake(req.body.id);
    res.json({ data: cake });
  },
];
