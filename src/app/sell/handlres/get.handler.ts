import {RequestHandler, Request, Response} from 'express';
import { getSales } from '../sell.service'

type Params = {};
type Query = {};
type Body = {};

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const sell = await getSales();		
		res.json(sell);
	}
]