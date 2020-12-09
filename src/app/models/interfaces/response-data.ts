import { ICake } from '../../cake/interfaces/Cake';

export interface IResponseData {
    message: string;
    data: ICake | string | number | ICake[];
}