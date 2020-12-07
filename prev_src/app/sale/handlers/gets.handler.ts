import { RequestHandler, Request, Response } from 'express';

import { conn } from '../../app.database';
import { ISaleQuery } from '../sale.interface';
import { SaleService } from '../sale.service';

type Params = {};
type Query = ISaleQuery;
type Body = {};
type Req =  Request<Params, {}, Body, Query>
type Res =  Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const ops = new SaleService(conn);
            const sales = await ops.get(req.query);
            
            res.status(200).json({ data: sales });
        } catch (error) {            
            res.status(500).json(error);
        }
    }
];