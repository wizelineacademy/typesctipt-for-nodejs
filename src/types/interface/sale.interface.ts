import { Document } from "mongoose"
import { customer as customerInterface } from "../interface/customer.interface"
export interface ISale extends Document{
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    cakeId: string;
    quantity: number;
}