import { Req, Res } from './types';
import { updateCake } from '../cake.service';

export default async (req: Req, res: Res, next): Promise<Res> => {
    const cake = await updateCake(req.params.id, req.body);
    return res.json({ data: cake });
};