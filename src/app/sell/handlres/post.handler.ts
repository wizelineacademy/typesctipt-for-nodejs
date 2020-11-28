import {RequestHandler, Request, Response} from 'express';
import { makeSell } from '../sell.service'
import { Sell } from '../sell.modal'

type Params = {};
type Query = {};
type Body = Sell;

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cake = await makeSell(req.body);		
		res.json(cake);
	}
]