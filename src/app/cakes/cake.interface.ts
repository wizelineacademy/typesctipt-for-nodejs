import { IModel } from "../model.interface";
import { CakeStatus } from "./cake-status.enum";

export interface ICake extends IModel{
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number,
    status: CakeStatus
}