import { Req, Res } from './types';
import { deleteCake } from '../cake.service';

export default async (req: Req, res: Res, next): Promise<Res> => {
    const result = await deleteCake(req.params.id);
    return res.json({ data: result });
};