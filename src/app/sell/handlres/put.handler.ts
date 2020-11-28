import {RequestHandler, Request, Response} from 'express';
import { updateSell } from '../sell.service';
import { Sell } from '../sell.model';

type Params = {id: number};
type Query = {};
type Body = Sell;

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

// HERE I HAVE AN ISSUE, IN THROWS ME AN ERROR TO IMPLEMENT THE REQ.PARAMS IN THIS WAY

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cake = await updateSell(req.params.id, req.body);		
		res.json(cake);
	}
]