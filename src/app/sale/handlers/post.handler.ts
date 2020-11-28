import { RequestHandler, Request, Response } from 'express';

import { SaleParams } from '../sale.interface';
import { sellCake } from '../sale.service';

type Params = {};
type Query = {};
type Body = SaleParams;
type Req = Request<Params, {}, Body, Query>
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const sell = await sellCake(req.body);
            res.status(201).json({ data: sell })
        } catch (error) {
            res.json({ message: error });
        }
    }
];