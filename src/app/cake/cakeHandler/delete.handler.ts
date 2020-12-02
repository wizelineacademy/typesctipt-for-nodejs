import { Request, RequestHandler, Response } from "express";
import { conn } from "../../app.db";
import { CakeService } from "../cake.service";

const cakeService = new CakeService(conn);
export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    const { id } = req.body;
    try {
      const cake = await cakeService.deleteCake(id);
      res.status(200).json({ data: cake });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];
