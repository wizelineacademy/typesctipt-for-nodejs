import { RequestHandler } from 'express';
import { ISell } from '../../models/ISell';
import { Req, Res } from '../../types/index';
import { Sales } from '../sales.class';
import { errorWrap } from '../../../components/error.component';

export const handler: RequestHandler[] = [
  // Middlewares
  errorWrap(async (req: Req, res: Res) => {
    const sales = new Sales();
    const payload = req.body as ISell;
    sales.cakeId = payload.cakeId;
    sales.customerEmail = payload.customerEmail;
    sales.customerName = payload.customerName;
    sales.customerPhoneNumber = payload.customerPhoneNumber;
    sales.quantity = payload.quantity;
    const saleId = await sales.makeSell();
    res.json({ message: 'Cake sold!', saleId });
  }),
];
