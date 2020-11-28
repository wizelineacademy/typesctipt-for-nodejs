import {
    CakeParams,
    CakeInterface,
    CakeListParams,
    CakeDetailParams
} from './cake.interface';

export class Cake implements CakeInterface {
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    stock: number;

    constructor(params: CakeParams) {
        this.name = params.name;
        this.description = params.description;
        this.ingredients = params.ingredients;
        this.price = params.price;
        this.stock = params.stock;
    }
    
    // cakeList(params: CakeListParams): CakeParams[] {
    //     return [];
    // }

    // addCake(params: CakeParams): CakeParams {
    //     return {};
    // }

    // cakeDetail(params: CakeDetailParams): CakeParams {
    //     return {};
    // }

    // editCake(params: CakeParams): CakeParams {
    //     return {};
    // }
}