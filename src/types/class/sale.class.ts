import { customer as customerInterface } from "../interface/customer.interface"
export class sale{
    id: string;
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    cakeId: string;
    quantity: number;
    constructor(id: string, customer: customerInterface, cakeId: string, quantity: number){
        this.id = id;
        this.customerName = customer.name;
        this.customerPhoneNumber = customer.phoneNumber;
        this.customerEmail = customer.email;
        this.cakeId = cakeId;
        this.quantity = quantity
    }
}