import { RequestHandler, Request, Response, NextFunction } from "express";
import { SaleService } from "../sale.service";
import { dbMain } from "../../app.database";
import { Sale } from "../sale.class";
import { ISale } from "../sale.interface";

type Params = { saleId?: string };
type Query = {};
type Body = {
    customerName: string,
    customerPhoneNumber: string,
    customerEmail: string,
    quality: number,
    cakeId: string,
};
type Req = Request< Params, {}, Body, Query >;
type Res = Response;
type Next = NextFunction;

export const getHandler: RequestHandler[] = [
    async (req: Req, res: Res, next: Next) => {
        const { saleId } = req.params;
        const saleService = new SaleService(dbMain);
        try{
            const sale = await saleService.getSaleInstance(saleId);
            res.json(sale.getSaleDetails());
        }catch(error){
            next(error);
        }
    }
]

