import { ISellCake } from './sellCake.interface';

export interface ISale {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: ISellCake;
}
