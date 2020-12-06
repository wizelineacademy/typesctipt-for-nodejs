import { Request, RequestHandler, Response } from "express";
import { conn } from "../../app.db";
import { SaleService } from "../sales.service";

const saleService = new SaleService(conn);

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    try {
      const sale = await saleService.createSale(req.body);
      res.status(200).json({ data: sale });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];
