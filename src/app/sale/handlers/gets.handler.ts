import { RequestHandler, Request, Response } from 'express';

import { dbConn } from '../../app.database';
import { SaleService } from '../sale.service';
import { ISaleQuery } from '../sale.interface';

type Params = {};
type Query = ISaleQuery;
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
    async(req: Req, res: Res) => {
        try {
            const saleService = new SaleService(dbConn);
            const sales = await saleService.getMany(req.query);
            
            res.status(200).json({
                success: true,
                data: sales
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: JSON.stringify(error)
            });
        }
    }
]