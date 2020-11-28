import { customer as customerInterface } from "../interface/customer.interface"
export class sale{
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    cakeId: string;
    quantity: number;
    constructor(customer: customerInterface, cakeId: string, quantity: number){
        this.customerName = customer.name;
        this.customerPhoneNumber = customer.phoneNumber;
        this.customerEmail = customer.email;
        this.cakeId = cakeId;
        this.quantity = quantity
    }
}