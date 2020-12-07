import {RequestHandler, Request, Response} from 'express';
import { SellService } from '../sell.service';
import { dbConn } from '../../app.database';

type Params = {};
type Query = {};
type Body = {};

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const sellService = new SellService(dbConn);
		const sell = await sellService.getMany();		
		res.json(sell);
	}
]