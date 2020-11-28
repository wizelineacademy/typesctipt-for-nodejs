import { Cacke } from "../cacke/cacke";
import { Request } from "express";
import { Sell } from "../sell/sell";

export abstract class ResponseData {
    static getResponse(message: string, data:  Cacke | string | number | Sell): IResponseData {
        return {
            message: message,
            data: data,
        }
    }
}

export interface IResponseData {
    message: string;
    data: Cacke | string | number | Sell;
}

type Params = {id: string};
type Query = {};
type Body = {};

export type Req = Request<Params, {}, Body, Query>;
