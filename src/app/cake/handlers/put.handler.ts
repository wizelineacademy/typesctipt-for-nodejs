import { RequestHandler, Request, Response } from 'express';

import { Cake } from '../cake.class';
import { ICake, ICakeParams } from '../cake.interface';

type Params = ICakeParams;
type Query = {};
type Body = ICake;
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {                        
            const cake: Cake = new Cake(req.body);

            await cake.update(req.params?.id);

            res.status(201).json({
                success: true,
                data: cake.values
            });
        } catch (error) {
            res.status(500).json({
                success: false,
                message: JSON.stringify(error)
            });
        }
    }
]