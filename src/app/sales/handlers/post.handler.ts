import { Request, RequestHandler, Response } from 'express';
import { Sale } from '../sale.class';
import { ISale } from '../sale.interface';
import { PerformSaleBody } from '../sale.types';

type Params = {};
type Query = {};
type Req = Request<Params, {}, ISale & PerformSaleBody, Query>;
type Res = Response;

export const postHandler: RequestHandler[] = [
    async (req: Req, res: Res, next): Promise<Res> => {
        const sale = new Sale(req.body);
        try {
            const result = await sale.processSale(req.body.cakeId, req.body.quantity);
            return res.json({data: result});
        }
        catch (er) {
            next(er);
        }
    }
]