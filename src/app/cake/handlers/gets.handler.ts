import { RequestHandler, Request, Response } from 'express';

import { CakeListParams } from '../cake.interface';
import { cakeList } from '../cake.service';

type Params = {};
type Query = CakeListParams;
type Body = {};
type Req = Request<Params, {}, Body, Query>
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const cakes = await cakeList(req.query);
            res.status(200).json({ data: cakes });
        } catch (error) {
            res.json(error);
        }
    }
];