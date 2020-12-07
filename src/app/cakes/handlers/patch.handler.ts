import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Cake } from '../cake.class';
import { ICake } from '../cake.interface';

type Params = { id?: string };
type Query = {};
type Req = Request<Params, {}, ICake, Query>;
type Res = Response;

export const patchHandler: RequestHandler[] = [
    async (req: Req, res: Res, next: NextFunction): Promise<Res> => {
        const cake = new Cake();
        try {
            const result = await cake.patch(req.params.id, req.body)
            return res.json({ data: result });
        }
        catch (er) {
            next(er);
        }
    }
];