import { RequestHandler, Request, Response } from "express";
import { CakeService } from '../cake.service';
import { dbConnection } from '../../app.database';

type Params = {};
type Query = {};
type Body <Cake> = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
  // auth
  async (req: Req, res: Res) => {
    console.log('Handling POST...');
    const service: CakeService = new CakeService(dbConnection);
    console.log('BODY===>', req.body);
    try { 
      const created = await service.save(req.body);
      console.log('Responding created:', created);
      res.json(created);
    } catch (e) {
      console.log(e);
      res.status(400).json(e);
    }
    
  }
];