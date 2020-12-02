import { Request } from "express";

import { ICacke } from "../../cacke/interfaces/cacke";

//TODO: Need to move these to their respective file
export abstract class ResponseData {
    static getResponse(message: string, data:  ICacke | string | number| ICacke[] ): IResponseData {
        return {
            message: message,
            data: data,
        }
    }
}

export interface IResponseData {
    message: string;
    data: ICacke | string | number | ICacke[];
}

type Params = {id: string};
type Query = {};
type Body = {};

export type Req = Request<Params, {}, Body, Query>;
