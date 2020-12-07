import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Cake } from '../cake.class';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const getHandler: RequestHandler[] = [
    async (req: Req, res: Res, next: NextFunction): Promise<Res> => {
        const cake = new Cake();
        try {
            const result = await cake.get();
            return res.json({ data: result });
        }
        catch (er) {
            next(er);
        }
    }
];