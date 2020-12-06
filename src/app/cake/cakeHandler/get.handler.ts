import { Request, RequestHandler, Response } from "express";
import { conn } from "../../app.db";
import { CakeService } from "../cake.service";

const cakeService = new CakeService(conn);
export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    try {
      const cakes = await cakeService.getCakes();
      res.status(200).json({ data: cakes });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];
