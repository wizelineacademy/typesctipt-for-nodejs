import mongoose, { Document } from 'mongoose';
import { CakeSchema } from '../model/cake.model'
import { Ingredient } from "../class/ingredient.class"

export interface ICake extends Document{
    id: string;
    name: string;
    description: string;
    ingredients: Ingredient[];
    price: number;
    stock: number;
    state: string;
}

class Cake {
    cake: ICake
    constructor(cake: ICake){
        this.cake = cake
    }
}

export default mongoose.model<ICake, Cake>('Cake', CakeSchema);