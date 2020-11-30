import { iCake } from './../cake/cake.model';

export interface iSell {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: iCake;
}
