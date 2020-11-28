export const enum CakeStatus {
    Available = "Available",
    LastUnits = 'LastUnits',
    OutOfStock = 'OutOfStock'
};

export interface ICake {
    name: string,
    description: string,
    ingredients: string[],
    price: number,
}

export default class Cake implements ICake {
    constructor(model: ICake) {
        this.name = model.name;
        this.description = model.description;
        this.price = model.price;
        this.stock = 1;
        this.ingredients = [];
        this.status = CakeStatus.LastUnits;
    }
    
    name: string
    description: string
    ingredients: string[]
    price: number
    stock: number
    status: CakeStatus
}