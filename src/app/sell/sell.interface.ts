import { iCake } from './../cake/cake.interface';

export interface iSell {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: iCake;
}
