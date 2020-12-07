import { Request } from "express";

type Params = {id: string};
type Query = {};
type Body = {};

export type Req = Request<Params, {}, Body, Query>;
