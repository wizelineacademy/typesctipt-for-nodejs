import {RequestHandler, Request, Response} from 'express';
import { makeCake } from '../cake.service';
import { Cake } from '../cake.model';

type Params = {};
type Query = {};
type Body = Cake;

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cake = await makeCake(1, req.body);		
		res.json(cake);
	}
]