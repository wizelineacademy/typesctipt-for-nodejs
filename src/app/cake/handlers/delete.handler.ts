import {RequestHandler, Request, Response} from 'express';
import { deleteCake } from '../cake.service';
import { Cake } from '../cake.model';

type Params = {id: number};
type Query = {};
type Body = Cake;

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

// HERE I HAVE AN ISSUE, IN THROWS ME AN ERROR TO IMPLEMENT THE REQ.PARAMS IN THIS WAY

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cake = await deleteCake(req.params.id);		
		res.json(cake);
	}
]