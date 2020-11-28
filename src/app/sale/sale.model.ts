import { CakeInterface } from '../cake/cake.model';

export interface SaleInterface {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail?: string;
  totalAmount: number;
  cake: CakeInterface;
}
