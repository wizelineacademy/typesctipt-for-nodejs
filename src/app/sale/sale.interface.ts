import { ICake } from '../cake/cake.interface';

export interface ISell {
  customerName: string
  customerPhoneNumber: string
  customerEmail: string
  totalAmount: number
  cakeId: string
  cake: ICake
  quantity: number;

}