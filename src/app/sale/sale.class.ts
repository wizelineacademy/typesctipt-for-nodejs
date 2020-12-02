import { ICake } from '../cake/cake.interface';
import { ISell } from './sale.interface';

class Sell implements ISell {
  customerName: string
  customerPhoneNumber: string
  customerEmail: string
  totalAmount: number
  cakeId: string
  cake: ICake
  quantity: number

  constructor(customerName: string, customerPhoneNumber: string, customerEmail: string, totalAmount: number, cakeId: string, cake: ICake, quantity: number) { 
      this.customerName = customerName
      this.customerPhoneNumber = customerPhoneNumber
      this.customerEmail = customerEmail
      this.totalAmount = totalAmount
      this.cakeId = cakeId
      this.cake = cake
      this.quantity = quantity
  }

}