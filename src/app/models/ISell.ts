import { ICake } from './Cake';

export interface ISell {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: ICake;
}
