import { Cake } from "../cakes/cake.class";

export class Sale{
    _id: number;
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    totalAmount: number;
    cake: Cake;

    constructor( sale: { _id: number, customerName: string, customerPhoneNumber: string, customerEmail: string, totalAmount: number, cake: Cake }){
        this._id = sale._id;
        this.customerName = sale.customerName;
        this.customerPhoneNumber = sale.customerPhoneNumber;
        this.customerEmail = sale.customerEmail;
        this.totalAmount = sale.totalAmount;
        this.cake = sale.cake;
    }

}
