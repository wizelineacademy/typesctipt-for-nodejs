import { RequestHandler, Request, Response } from 'express';

import { Cake } from '../cake.class';
import { ICake } from '../cake.interface';

type Params = {};
type Query = {};
type Body = ICake;
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {                        
            const cake: Cake = new Cake(req.body);
            const result = await cake.save();
            
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