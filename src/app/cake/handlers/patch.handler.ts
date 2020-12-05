// Get handler
// Single Responsibility File, for handling requests
import { RequestHandler, Request, Response } from 'express';
import { CakeService } from '../cake.service';
import { ICake } from '../cake.interface';
import { Cake } from '../cake.class';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

// request handler functions array that express allows us to pass to it
// middlewares goes here like validation and loggers
export const handler: RequestHandler[] = [
  async (req: Req, res: Res) => {
    try {
      const cakeId: string = req.params['cakeId'];
      const cakeData: ICake = req.body as ICake;
      // const cakeService: CakeService = new CakeService();
      const cake: Cake = new Cake(cakeData);
      // const cake = await cakeService.editCake(cakeId, cakeData);
      const updatedCake = await cake.edit(cakeId);
      console.log('[updatedCake]', updatedCake);
      res.json(updatedCake);
    } catch (error) {
      console.log('error on editCake', error.message);
      res.json({ errorMessage: 'Something went wrong!' });
    }
  },
];
