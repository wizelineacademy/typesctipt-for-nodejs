import { RequestHandler, Request, Response } from "express";
import { createSale } from "../sale.service";
import { Sale } from "../sale.class";
import { Sale as SaleInterface } from "../sale.interface";

type Params = { saleId?: number };
type Query = {};
type Body = {};
type Req = Request< Params, {}, Body, Query >;
type Res = Response;

export const createHandler : RequestHandler[] = [
    async(req: Req, res: Res) => {
        const sale = req.body as SaleInterface;
        const newSale = new Sale( sale );
        console.log(newSale);
        const saleCreated = await createSale(newSale);
        res.json(saleCreated);
    }
]

