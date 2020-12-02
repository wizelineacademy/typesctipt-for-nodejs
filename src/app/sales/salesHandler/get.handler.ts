import { Request, RequestHandler, Response } from "express";
import { conn } from "../../app.db";
import { SaleService } from "../sales.service";

const saleService = new SaleService(conn);

export const handler: RequestHandler[] = [
  async (req: Request, res: Response) => {
    try {
      const sales = await saleService.getSales();
      res.status(200).json({ data: sales });
    } catch (error) {
      res.status(500).json({ error });
    }
  },
];
