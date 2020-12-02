import {RequestHandler, Request, Response} from 'express';
import { makeSell } from '../sell.service'
import { Sell } from '../sell.type'
import { SellService } from '../sell.service.v2';
import { dbConn } from '../../app.database';

type Params = {};
type Query = {};
type Body = Sell;

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

const sellService = new SellService(dbConn);

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cake = await sellService.makeCake(req.body);		
		res.json(cake);
	}
]