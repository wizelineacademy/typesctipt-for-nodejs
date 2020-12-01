import { RequestHandler, Response, Request } from 'express';

import { conn } from '../../app.database';
import { CakeService } from '../cake.service';

type Req = Request;
type Res =  Response;

export const handler: RequestHandler[] = [
    async (req: Req, res: Res) => {
        try {
            const ops = new CakeService(conn);
            const cake = await ops.get(req.params.id);

            res.status(200).json({ data: cake });
        } catch (error) {
            res.status(404).json(error);
        }
    }
];