import {RequestHandler, Request, Response} from 'express';
import { deleteSell } from '../sell.service';
import { ParamsDictionary } from 'express-serve-static-core';
import { Sell } from '../sell.type';
import { SellService } from '../sell.service.v2';
import { dbConn } from '../../app.database';

type Query = {};
type Body = Sell;

type Req = Request<ParamsDictionary, {}, Body, Query>;
type Res = Response;

const sellService = new SellService(dbConn);

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cake = await sellService.delete(req.params.id);		
		res.json(cake);
	}
]