import { Request, Response } from 'express';
import { ICake } from '../cake.class';

type Params = {
    id?: string
};
type Query = {
};

type Req = Request<Params, {}, ICake, Query>;
type Res = Response;

export {
    Params,
    Query,
    Req,
    Res
}