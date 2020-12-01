import { ICake } from '../cake/cake.model';

export interface ISale {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail?: string;
  totalAmount: number;
  cake: ICake;
}
