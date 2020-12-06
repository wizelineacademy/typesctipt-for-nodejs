import { ISoldCake } from "./sold-cake.interface";

export class SoldCake implements ISoldCake {
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    quantity: number;
}