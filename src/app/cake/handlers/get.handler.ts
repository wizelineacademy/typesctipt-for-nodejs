import {RequestHandler, Request, Response} from 'express';
import { getCakes } from '../cake.service';
import { Cake } from '../cake.class'
import { CakeService } from '../cake.service.v2';
import { dbConn } from '../../app.database';

type Params = {};
type Query = {};
type Body = Cake;

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

const cakeService = new CakeService(dbConn);

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cake = await cakeService.makeCake(req.body);		
		res.json(cake);
	}
]