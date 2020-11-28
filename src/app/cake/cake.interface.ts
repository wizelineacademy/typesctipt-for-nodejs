export interface CakeParams {
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    stock: number;
}

export interface CakeInterface extends CakeParams {
    // addCake(params: CakeParams): CakeParams;
    // cakeDetail(params: CakeDetailParams): CakeParams;
    // cakeList(params: CakeListParams): CakeParams[];
    // editCake(params: CakeParams): CakeParams;
}

export interface CakeListParams {
    price?: number;
    ingredient?: string;
}

export interface CakeDetailParams {
    id: string;
}