import { RequestHandler, Request, Response } from 'express';

import { CakeParams } from '../cake.interface';
import { editCake } from '../cake.service';

type Params = {};
type Query = {};
type Body = CakeParams;
type Req = Request<Params, {}, Body, Query>
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const cake = await editCake(req.body);
            res.status(200).json({ data: cake });
        } catch (error) {
            res.json(error);
        }
    }
];