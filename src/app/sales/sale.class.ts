import { ICake } from "../cakes/cake.class";

export interface ISale {
    customerName: string,
    customerPhoneNumber: string,
    customerEmail: string,
    totalAmount: number,
    cake: SoldCake,
}

export class SoldCake implements ICake {
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    quantity: number;
}

export default class Sale implements ISale {
    constructor(model: ISale) {
        this.customerName = model.customerName;
        this.customerPhoneNumber = model.customerPhoneNumber;
        this.customerEmail = '';
        this.totalAmount = model.totalAmount || 0;
        this.cake = model.cake;
    }
    
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    totalAmount: number;
    cake: SoldCake;
}