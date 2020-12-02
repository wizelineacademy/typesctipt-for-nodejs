import { RequestHandler, Request, Response } from "express";
import { CakeService } from '../cake.service';
import { Cake } from '../cake.class';
import { dbConnection } from '../../app.database';


type Params = {id: string};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handlerById: RequestHandler[] = [
  // auth
  async (req: Req, res: Res) => {
    console.log('Handling GET By ID: ',req.params?.id);
    const service: CakeService = new CakeService(dbConnection);
    const data = await service.getOneBy(req.params.id);
    res.json(data);
  }
];