import { Request, Response } from 'express';
import { ISale } from '../sale.class';

type Params = {
    id?: string
};
type Query = {
};

type Req = Request<Params, {}, ISale, Query>;
type Res = Response;

export {
    Params,
    Query,
    Req,
    Res
}