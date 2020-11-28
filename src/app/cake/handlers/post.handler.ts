import { RequestHandler, Request, Response } from 'express';

import { CakeParams } from '../cake.interface';
import { createCake } from '../cake.service';

type Params = {};
type Query = {};
type Body = CakeParams;
type Req = Request<Params, {}, Body, Query>
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const cake = await createCake(req.body);
            res.status(201).json({ data: cake });
        } catch (error) {
            res.json(error);
        }
    }
];