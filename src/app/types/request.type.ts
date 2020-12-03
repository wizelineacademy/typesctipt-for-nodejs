import { Request } from 'express';
type Params = {};
type Query = {};
type Body = {};
type Req = Request<Params, {}, Body, Query>;

export { Req };
