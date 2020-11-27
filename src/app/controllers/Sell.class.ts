import { SellInterface } from './../models/sell.model';
import { CakeInterface } from './../models/cake.model';

class CakeSell implements SellInterface {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: CakeInterface;

  constructor(
    name: string,
    phone: string,
    email: string,
    totalAmount: number,
    cake: CakeInterface
  ) {
    this.customerName = name;
    this.customerPhoneNumber = phone;
    this.customerEmail = email;
    this.totalAmount = totalAmount;
    this.cake = cake;
  }

  sell(cakeQty: number): number {
    return this.totalAmount - cakeQty;
  }

  newSell(
    customerName: string,
    customerPhoneNumber: string,
    customerEmail: string,
    totalAmount: number,
    cake: CakeInterface
  ): number {
    console.log('Save New Sale');
    return 1;
  }
}
