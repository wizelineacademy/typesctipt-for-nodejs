import { Request, RequestHandler, Response } from 'express';
import { Sale } from '../sale.class';

type Params = { id?: string };
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const deleteHandler: RequestHandler[] = [
    async (req: Req, res: Res, next): Promise<Res> => {
        const sale = new Sale();
        try {
            const result = await sale.remove(req.params.id);
            return res.json({ data: result });
        }
        catch (er) {
            next(er);
        }
    }
];