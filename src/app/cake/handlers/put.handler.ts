import {RequestHandler, Request, Response} from 'express';
import { ParamsDictionary } from 'express-serve-static-core';
import { Cake } from '../cake.type';
import { CakeService } from '../cake.service';
import { dbConn } from '../../app.database';

type Query = {};
type Body = Cake;

type Req = Request<ParamsDictionary, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cakeService = new CakeService(dbConn);
		const cakeId = +req.params.id;
		const cake = await cakeService.update(cakeId, req.body);		
		res.json(cake);
	}
]