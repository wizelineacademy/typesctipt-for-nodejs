import { RequestHandler, Request, Response } from "express";
import { CakeService } from '../cake.service';
import { Cake } from '../cake.class';
import { dbConnection } from '../../app.database';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handlerAll: RequestHandler[] = [
  // auth
  async (req: Req, res: Res) => {
    console.log('Handling GET All...');
    const service: CakeService = new CakeService(dbConnection);
    const data = await service.getMany();
    console.log('Returning data:', data)
    res.json(data);
  }
];
