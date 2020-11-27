import { CakeInterface } from './../models/cake.model';

export interface SellInterface {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: CakeInterface;

  newSell(
    customerName: string,
    customerPhoneNumber: string,
    customerEmail: string,
    totalAmount: number,
    cake: CakeInterface
  ): number;

  sell(qty: number): number;
}
