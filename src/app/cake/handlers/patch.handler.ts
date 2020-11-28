// Get handler
// Single Responsibility File, for handling requests
import { RequestHandler, Request, Response } from 'express';
import { editCake } from '../cake.service';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

// request handler functions array that express allows us to pass to it
// middlewares goes here like validation and loggers
export const handler: RequestHandler[] = [
  async (req: Req, res: Res) => {
    const cakeData = {
      name: 'Chocolate Cake',
      description: 'Es un pastel de Chocolate Cake.',
      ingredients: ['huevo', 'harina', 'leche'],
      price: 22,
      stock: 1,
    };

    const cake = await editCake(cakeData);
    res.json(cake);
  },
];
