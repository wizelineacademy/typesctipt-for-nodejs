import { iSell } from './../sell/sell.model';
import { iCake } from './../cake/cake.model';

export class CakeSell implements iSell {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: iCake;

  constructor(sell: iSell) {
    this.customerName = sell.customerName;
    this.customerPhoneNumber = sell.customerPhoneNumber;
    this.customerEmail = sell.customerEmail;
    this.totalAmount = sell.totalAmount;
    this.cake = sell.cake;
  }

  sell(cakeQty: number): number {
    return this.totalAmount - cakeQty;
  }

  newSell(sell: iSell): number {
    console.log('Save New Sale');
    return 1;
  }
}
