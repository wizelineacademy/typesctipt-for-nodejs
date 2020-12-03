import { Req, Res } from './types';
import { deleteSale } from '../sale.service';

export default async (req: Req, res: Res, next): Promise<Res> => {
    const result = await deleteSale(req.params.id);
    return res.json({ data: result });
};