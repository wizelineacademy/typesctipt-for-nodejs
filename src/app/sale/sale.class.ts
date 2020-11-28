import { SaleParams } from './sale.interface';
import { CakeParams } from '../cake/cake.interface';

export class Sale implements SaleParams {
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    totalAmount: number;
    cake: CakeParams;

    constructor(params: SaleParams) {
        this.customerName = params.customerName;
        this.customerEmail = params.customerEmail;
        this.customerPhoneNumber = params.customerPhoneNumber;
        this.totalAmount = params.totalAmount;
        this.cake = params.cake;
    }
}