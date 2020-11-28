import { CakeParams } from '../cake/cake.interface';

export interface SaleParams {
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    totalAmount: number;
    cake: CakeParams;
}

export interface SaleQueryParams {
    year: number;
    week: number;
}