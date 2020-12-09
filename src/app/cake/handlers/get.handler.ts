import { RequestHandler, Request, Response } from 'express';

import { dbConn } from '../../app.database';
import { CakeService } from '../cake.service';
import { ICakeParams } from '../cake.interface';

type Params = ICakeParams;
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const cakeService = new CakeService(dbConn);
            const cake = await cakeService.getOne(req.params?.id);

            res.status(200).json({
                success: true,
                data: cake
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: JSON.stringify(error)
            });
        }
    }
]