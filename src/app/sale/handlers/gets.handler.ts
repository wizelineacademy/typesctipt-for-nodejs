import { RequestHandler, Request, Response } from 'express';

import { getSales } from '../sale.service';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const sales = await getSales();
            res.status(200).json({ data: sales });
        } catch (error) {
            res.json({ message: error })
        }
    }
];