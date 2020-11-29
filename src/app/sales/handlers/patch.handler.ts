import { Req, Res } from './types';
import { updateSale } from '../sale.service';

export default async (req: Req, res: Res, next): Promise<Res> => {
    const cake = await updateSale(req.params.id, req.body);
    return res.json({ data: cake });
};