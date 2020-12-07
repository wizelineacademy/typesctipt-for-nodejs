import { RequestHandler, Request, Response } from 'express';

import { ICake } from '../cake.interface';
import { Cake } from '../cake.class';

type Params = {};
type Query = {};
type Body = ICake;
type Req =  Request<Params, {}, Body, Query>
type Res =  Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const ops = new Cake(req.body);
            const cake = await ops.save();
            
            res.status(201).json({ data: cake });
        } catch (error) {
            res.status(500).json(error);
        }
    }
];