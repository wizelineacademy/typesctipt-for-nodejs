import { RequestHandler, Request, Response } from "express";
import { getData, getDataById } from '../cake.service';

type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handlerAll: RequestHandler[] = [
  // auth
  async (req: Req, res: Res) => {
    console.log('Handling GET All...');
    const data = await getData();
    console.log('Returning data:', data)
    res.json(data);
  }
];

export const handlerById: RequestHandler[] = [
  // auth
  async (req: Req, res: Res) => {
    console.log('Handling GET By ID...');
    const data = await getDataById();
    res.json(data);
  }
];