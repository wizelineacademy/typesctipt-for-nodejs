import { RequestHandler, Request, Response } from 'express';

import { ISale } from '../sale.interface';
import { Sale } from '../sale.class';

type Params = {};
type Query = {};
type Body = ISale;
type Req =  Request<Params, {}, Body, Query>
type Res =  Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const ops = new Sale(req.body);
            const sale = await ops.sell();
            
            res.status(201).json({ data: sale });
        } catch (error) {
            console.log(error);
            res.status(500).json(error);
        }
    }
];