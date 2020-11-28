
export class Cake{
    _id: number
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    stock: number;
    status: string;

    constructor( cake: { _id: number, name: string, description: string, ingredients: string[], price: number, stock: number, status: string }){
        this._id = cake._id;
        this.name = cake.name;
        this.description = cake.description;
        this.ingredients = cake.ingredients;
        this.price = cake.price;
        this.stock = cake.stock;
        this.status = cake.status;
    }

}
