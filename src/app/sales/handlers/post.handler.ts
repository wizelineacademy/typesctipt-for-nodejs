import { RequestHandler, Request, Response, NextFunction } from "express";
import { SaleService } from "../sale.service";
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

export const createHandler : RequestHandler[] = [
    async(req: Req, res: Res, next: Next) => {
        try{
            const sale: Sale = new Sale(req.body);
            const saleId = await sale.save();
            res.json(saleId)
        }catch(error){
            next(error);
        }
    }
]

