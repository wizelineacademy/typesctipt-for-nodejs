import { NextFunction, RequestHandler } from "express"
import { Request, Response } from "express"
import { Sale } from "../sale.class"
import { ISale } from "../sale.interface"

type Params = {}
type Query = {}
type Body = ISale
type Req = Request<Params, {}, Body, Query>
type Res = Response

export const handler: RequestHandler[] = [

    async (req: Req, res: Res, next: NextFunction) => {

        let sale: Sale = new Sale();
        let payload = req.body as ISale

        sale.customerName = payload.customerName;
        sale.customerEmail = payload.customerEmail;
        sale.customerPhoneNumber = payload.customerPhoneNumber;
        sale.totalAmount = payload.totalAmount;
        sale.cakeId = payload.cakeId!;
        sale.quantity = payload.quantity

        let savedSale = await sale.save();
        res.json({ success: true, route: "/sales", message: 'New sale was registred.', data: savedSale })
    }
];

