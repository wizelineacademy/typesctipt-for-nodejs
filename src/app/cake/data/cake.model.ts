import { CakeStatus } from "./cake-status.enum";

export interface Cake{
    id: string;
    name: string;
    description: string
    ingredients: string[]
    price: number
    stock: number
    status: CakeStatus
}

