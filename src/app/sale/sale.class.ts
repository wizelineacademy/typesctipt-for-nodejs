import { ICake } from '../cake/cake.interface';
import { ISell } from './sale.interface';

export class Sell implements ISell {
  customerName: string
  customerPhoneNumber: string
  customerEmail: string
  totalAmount: number
  cakeId: string
  cake: ICake
  quantity: number

  constructor(values?:ISell) { 
    this.setValues(values);
  }

  private setValues(values: ISell) {
    if (values) {
      this.customerName = values.customerName
      this.customerPhoneNumber = values.customerPhoneNumber
      this.customerEmail = values.customerEmail
      this.totalAmount = values.totalAmount
      this.cakeId = values.cakeId
      this.cake = values.cake
      this.quantity = values.quantity
     }
   }

}