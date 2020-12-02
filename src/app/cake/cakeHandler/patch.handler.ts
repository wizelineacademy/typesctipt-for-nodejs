import { Request, RequestHandler, Response } from "express";
import { conn } from "../../app.db";
import { CakeService } from "../cake.service";

const cakeService = new CakeService(conn);
export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    try {
      const cake = await cakeService.updateCake(req.body.id, req.body);
      res.json({ data: cake });
    } catch (error) {
      res.status(400).json({ error });
    }
  },
];
