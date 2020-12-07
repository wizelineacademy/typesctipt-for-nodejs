import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Cake } from '../cake.class';

type Params = { id?: string };
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const deleteHandler: RequestHandler[] = [
    async (req: Req, res: Res, next: NextFunction): Promise<Res> => {
        const cake = new Cake();
        try {
            const result = cake.remove(req.params.id);
            return res.json({ data: result });
        }
        catch (er) {
            next(er);
        }
    }
];