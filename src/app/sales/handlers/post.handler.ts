import { Request, RequestHandler, Response } from 'express';
import { Sale } from '../sale.class';
import { ISale } from '../sale.interface';

type Params = { id?: number };
type Query = {};
type Body = {
    customerName: string,
    customerPhone: string,
    customerEmail: string,
    cakeId: string,
    quantity: number
}
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const postHandler: RequestHandler[] = [
    async (req: Req, res: Res, next): Promise<Res> => {
        const sale = new Sale();
        try {
            const result = await sale.save();
            return res.json({data: result});
        }
        catch (er) {
            next(er);
        }
    }
]