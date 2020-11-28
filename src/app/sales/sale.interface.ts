import { Cake } from "../cakes/cake.interface";

export interface Sale {
    _id: number,
    customerName: string,
    customerPhoneNumber: string,
    customerEmail: string,
    totalAmount: number,
    cake: Cake,
}
