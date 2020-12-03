import { Req, Res } from './types';
import { addCake } from '../cake.service';

export default async (req: Req, res: Res, next): Promise<Res> => {
    if(req.body) {
        const cake = await addCake(req.body);
        return res.json({ data: cake });
    }
    next();
};