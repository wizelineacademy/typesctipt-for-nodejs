import {RequestHandler, Request, Response} from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { Sell } from '../sell.type';
import { SellService } from '../sell.service';
import { dbConn } from '../../app.database';

type Query = {};
type Body = Sell;

type Req = Request<ParamsDictionary, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const sellService = new SellService(dbConn);
		const cake = await sellService.update(+req.params.id, req.body);		
		res.json(cake);
	}
]