import { Req, Res } from './types';
import { getSales } from '../sale.service';

export default async (req: Req, res: Res, next): Promise<any> => {
    const cakes = await getSales();
    return res.json({ data: cakes });
};