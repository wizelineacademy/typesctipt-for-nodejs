import { Request, RequestHandler, Response } from 'express';
import { Sale } from '../sale.class';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const getHandler: RequestHandler[] = [
    async (req: Req, res: Res, next): Promise<any> => {
        try {
            const sale = new Sale();
            const result = await sale.get();
            return res.json({ data: result });
        }
        catch (er) {
            next(er);
        }
    }
];