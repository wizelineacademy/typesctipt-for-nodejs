// Get handler
// Single Responsibility File, for handling requests
import { RequestHandler, Request, Response } from 'express';
import { CakeService } from '../cake.service';

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
    try {
      // const cakes = await getCakes();
      const cakeService: CakeService = new CakeService();
      const cakes = await cakeService.getCakes();
      res.json(cakes);
    } catch (error) {
      console.log('error on getCakes', error.message);
      res.json({ success: false, errorMessage: 'Something went wrong!' });
    }
  },
];
