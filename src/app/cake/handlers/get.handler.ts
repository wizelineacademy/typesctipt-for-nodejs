import {RequestHandler, Request, Response} from 'express';
import { Cake } from '../cake.class'
import { CakeService } from '../cake.service';
import { dbConn } from '../../app.database';

type Params = {};
type Query = {};
type Body = Cake;

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cakeService = new CakeService(dbConn);
		const cake = await cakeService.makeCake(req.body);		
		res.json(cake);
	}
]