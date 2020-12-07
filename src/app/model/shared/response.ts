import { ICacke } from "../../cacke/interfaces/cacke";
import { IResponseData } from "../shared/interface/response-data";

export abstract class ResponseData {
    static getResponse(message: string, data:  ICacke | string | number| ICacke[] ): IResponseData {
        return {
            message: message,
            data: data,
        }
    }
}