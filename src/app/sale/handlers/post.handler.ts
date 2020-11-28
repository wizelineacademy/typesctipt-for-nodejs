// Post handler
// Single Responsibility File, for handling requests
import { RequestHandler, Request, Response } from 'express';
import { makeSale } from '../sales.service';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

// request handler functions array that express allows us to pass to it
// middlewares goes here like validation and loggers
export const handler: RequestHandler[] = [
  // auth,
  // logger,
  async (req: Req, res: Res) => {
    const saleData = {
      customerName: 'Lin',
      customerPhoneNumber: '1234567890',
      customerEmail: 'hello@world.com',
      totalAmount: 1,
      cake: {
        name: 'Schokolade',
        descrition: 'Schokolade cake',
        ingredients: ['huevo', 'harina', 'leche'],
        price: 12,
        quantity: 1,
      },
    };
    // Only the new sale
    const sale = await makeSale(saleData);
    res.json(sale);
  },
];
