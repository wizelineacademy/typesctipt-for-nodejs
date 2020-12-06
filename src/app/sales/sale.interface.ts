import { IModel } from '../model.interface';
import { SoldCake } from './sold-cake.class';

export interface ISale extends IModel{
    customerName: string,
    customerPhoneNumber: string,
    customerEmail: string,
    totalAmount: number,
    cake: SoldCake,
}

