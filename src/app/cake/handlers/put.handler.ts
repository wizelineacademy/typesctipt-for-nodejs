import {RequestHandler, Request, Response} from 'express';
import { updateCake } from '../cake.service';
import { ParamsDictionary } from 'express-serve-static-core';
import { Cake } from '../cake.type';
import { CakeService } from '../cake.service.v2';
import { dbConn } from '../../app.database';

type Query = {};
type Body = Cake;

type Req = Request<ParamsDictionary, {}, Body, Query>;
type Res = Response;

const cakeService = new CakeService(dbConn);

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cake = await cakeService.update(req.params.id, req.body);		
		res.json(cake);
	}
]