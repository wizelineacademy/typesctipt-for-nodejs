import { RequestHandler, Request, Response } from 'express';

import { getCake } from '../cake.service';

// type Params = {};
// type Query = {};
// type Body = {};
type Req = Request;
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const cake = await getCake(req.params.id);
            res.status(200).json({ data: cake })
        } catch (error) {
            res.status(404).json({});
        }
    }
];