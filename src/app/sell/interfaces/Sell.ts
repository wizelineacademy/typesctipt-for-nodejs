import { ICakeSold } from './CakeSold';

export interface ISell{
    customerName: string; 
    customerPhoneNumber: string; 
    customerEmail: string;
    cakeId: string;
    cake: ICakeSold;
    quantity: number
}