import { ISellCake } from './sellCake.interface';

export interface ISale {
  _id?: string;
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: ISellCake;
}
