import { CakeState } from '../enums/CakeState';

export interface ICake{
    name: string, 
    price: number, 
    description: string, 
    ingredients: string[], 
    stock: number, 
    status: CakeState
}