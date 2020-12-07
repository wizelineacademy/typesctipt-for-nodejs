import { RequestHandler, Request, Response } from 'express';

import { Sale } from '../sale.class';
import { ISale } from '../sale.interface';

type Params = {};
type Query = {};
type Body = ISale;
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const sale: Sale = new Sale(req.body);
            const result = await sale.sell();

            res.status(201).json({
                success: true,
                data: result
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: JSON.stringify(error)
            });
        }
    }
]