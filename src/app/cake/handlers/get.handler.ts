import {RequestHandler, Request, Response} from 'express';
import { getCakes } from '../cake.service'

type Params = {};
type Query = {};
type Body = {};

type Req = Request<Params, {}, Body, Query>;
type Res = Response;

export const handler: RequestHandler[] = [
	async (req: Req, res: Res) => {
		const cake = await getCakes();		
		res.json(cake);
	}
]