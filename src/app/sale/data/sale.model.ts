import { Document } from "mongoose";



export interface Sale extends Document{
    id?: number;
    customerName: string
    customerPhoneNumber: string
    customerEmail: string
    totalAmount: number
    cakeId: string
  }