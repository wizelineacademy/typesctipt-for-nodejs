import { ISale } from '../sale.interface';
import { Request, RequestHandler, Response } from 'express';
import { Sale } from '../sale.class';

type Params = { id?: string };
type Query = {};
type Req = Request<Params, {}, ISale, Query>;
type Res = Response;

export const patchHandler: RequestHandler[] = [
    async (req: Req, res: Res, next): Promise<Res> => {
        const sale = new Sale();
        try {
            const result = await sale.patch(req.params.id, req.body);
            return res.json({ data: result });
        }
        catch (er) {
            next(er);
        }
    }
]