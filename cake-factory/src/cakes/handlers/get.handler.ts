import { Request, RequestHandler, Response } from "express";
import { connection } from "../../app.db";
import CakeService from "../cakes.service";

const cakeService = new CakeService(connection);
export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    try {
      const cakes = await cakeService.getAll();
      res.status(200).json({ data: cakes });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];
