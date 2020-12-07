import { IIngredient } from './ingredient.interface'

export interface ICake extends Document{
    name: string;
    description: string;
    ingredients: IIngredient[];
    price: number;
    stock: number;
    state: string;
}