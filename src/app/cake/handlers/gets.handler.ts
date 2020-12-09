import { RequestHandler, Request, Response } from 'express';

import { dbConn } from '../../app.database';
import { CakeService } from '../cake.service';
import { ICakeQuery } from '../cake.interface';

type Params = {};
type Query = ICakeQuery;
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const cakeService = new CakeService(dbConn);
            const cakes = await cakeService.getMany();

            res.status(200).json({
                success: true,
                data: cakes
            });
        } catch (error) {
            res.json(500).json({
                success: false,
                message: JSON.stringify(error)
            });
        }
    }
]