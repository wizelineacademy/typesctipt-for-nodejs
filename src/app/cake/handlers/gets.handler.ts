import { RequestHandler, Request, Response } from 'express';

import { conn } from '../../app.database';
import { ICakeQuery } from '../cake.interface';
import { CakeService } from '../cake.service';

type Params = {};
type Query = ICakeQuery;
type Body = {};
type Req = Request<Params, {}, Body, Query>
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const ops = new CakeService(conn);            
            const cakes = await ops.getMany(req.query);
            
            res.status(200).json({ data: cakes });
        } catch (error) {
            res.status(500).json(error);
        }
    }
];