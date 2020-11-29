import { Req, Res } from './types';
import { addSale } from '../sale.service';

export default async (req: Req, res: Res, next): Promise<Res> => {
    if(req.body) {
        const cake = await addSale(req.body);
        return res.json({ data: cake });
    }
    next();
};