import { CakeService } from "./cake.service";
import { CakeStatus } from "./cake.status.enum";

export interface ICake {
    _id?: string
    name: string
    description: string
    ingredients: string[]
    price: number
    stock: number
    status: CakeStatus
}