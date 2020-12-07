import { IModel } from '../model.interface';
import { ISoldCake } from './sold-cake.interface';

export interface ISale extends IModel{
    customerName: string,
    customerPhoneNumber: string,
    customerEmail: string,
    totalAmount: number,
    date: Date,
    cake: ISoldCake,
}

