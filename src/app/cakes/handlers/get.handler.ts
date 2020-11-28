import { Req, Res } from './types';
import { getCakes } from '../cake.service';

export default async (req: Req, res: Res, next): Promise<any> => {
    const cakes = await getCakes();
    return res.json({ data: cakes });
};