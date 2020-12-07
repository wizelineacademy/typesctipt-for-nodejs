import {RequestHandler, Request, Response} from 'express';
import { Sell } from '../sell.type'
import { SellService } from '../sell.service';
import { dbConn } from '../../app.database';

type Params = {};
type Query = {};
type Body = Sell;

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const sellService = new SellService(dbConn);
		const cake = await sellService.makeCake(req.body);		
		res.json(cake);
	}
]