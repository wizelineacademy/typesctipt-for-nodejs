// Post handler
// Single Responsibility File, for handling requests
import { RequestHandler, Request, Response } from 'express';
import { ICake } from '../cake.interface';
import { Cake } from '../cake.class';
// import { CakeService } from '../cake.service';

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
      // console.log('req.body', req.body);
      const newCakeData = req.body as ICake;
      // const cakeService = new CakeService();
      const newCake: Cake = new Cake(newCakeData);
      // console.log('[newCake]', newCake);
      // const cakeId = await cakeService.createCake();
      await newCake.save();
      res.json({ success: true, cake: newCake._id });
    } catch (error) {
      console.log('(Post-handler) Error on saving a cake: ', error.message);
      res.status(500).json({
        success: false,
        errorMessage: error.message,
        // errorMessage: 'Something wen wrong trying to create the cake...',
      });
    }
  },
];
