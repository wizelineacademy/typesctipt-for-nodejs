import { ICake } from '../cake/interfaces/Cake';
import { IResponseData } from './interfaces/response-data';

export abstract class ResponseData {
    static getResponse(message: string, data:  ICake | string | number| ICake[] ): IResponseData {
        return {
            message: message,
            data: data,
        }
    }
}