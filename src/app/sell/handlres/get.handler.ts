import {RequestHandler, Request, Response} from 'express';
import { getSales } from '../sell.service';
import { SellService } from '../sell.service.v2';
import { dbConn } from '../../app.database';

type Params = {};
type Query = {};
type Body = {};

type Req = Request<Params, {}, Body, Query>;
type Res = Response;
const sellService = new SellService(dbConn);

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const sell = await sellService.getMany();		
		res.json(sell);
	}
]