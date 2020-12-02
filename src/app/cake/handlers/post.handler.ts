// Post handler
// Single Responsibility File, for handling requests
import { RequestHandler, Request, Response } from 'express';
// import { makeCake } from '../cake.service';
import { ICake } from '../cake.interface';
import { CakeService } from '../cake.service';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

// Request handler functions array that express allows us to pass to it.
// Middleware functions go here like validation and loggers.
export const handler: RequestHandler[] = [
  // auth,
  // logger,
  async (req: Req, res: Res) => {
    try {
      console.log('req.body', req.body);
      const newCake = req.body as ICake;
      const cakeService = new CakeService();
      // const cakeData = {
      //   name: 'Chocolate Cake',
      //   description: 'Es un pastel de Chocolate Cake.',
      //   ingredients: ['huevo', 'harina', 'leche'],
      //   price: 22,
      //   stock: 1,
      // };

      const cakeId = await cakeService.createCake(newCake);
      // const cakes = await makeCake(cakeData);
      res.json({ success: true, cake: cakeId });
    } catch (error) {
      res
        .status(500)
        .json({
          success: false,
          errorMessage: 'Something wen wrong trying to create the cake...',
        });
    }
  },
];
