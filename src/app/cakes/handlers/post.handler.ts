import { NextFunction, Request, RequestHandler, Response } from 'express';
import { Cake } from '../cake.class';
import { ICake } from '../cake.interface';

type AppResponse = {
    ok: boolean,
    data: any,
    error?: string
}

type Params = {};
type Query = {};
type Req = Request<Params, {}, ICake, Query>;
type Res = Response<AppResponse>;


export const postHandler: RequestHandler[] = [
    async (req: Req, res: Res, next: NextFunction): Promise<Res> => {
        const cake = new Cake(req.body);
        try {
            const result = await cake.save();    
            return res.json({ ok: true, data: result });
        }
        catch(er) {
            next(er);
        }
    }
];