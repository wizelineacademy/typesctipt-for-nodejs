import { Cake } from "../cakes/cakes.class";

export class Sell {
  id: number;
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: Cake;

  private createdAt: number;

  constructor(
    customerName: string,
    customerPhoneNumber: string,
    customerEmail: string,
    totalAmount: number,
    cake: Cake
  ) {
    this.id = 0;
    this.customerName = customerName;
    this.customerPhoneNumber = customerPhoneNumber;
    this.customerEmail = customerEmail;
    this.totalAmount = totalAmount;
    this.cake = cake;
    this.createdAt = Date.now();
  }

  isValid(): boolean {
    if (this.customerName.length < 3 || this.customerName.length > 50)
      return false;
    if (this.customerPhoneNumber.length < 10)
      //TODO: validate with regex
      return false;
    if (this.customerEmail.length < 5 || this.customerEmail.length > 100)
      //TODO: validate with regex
      return false;
    if (this.totalAmount < 1) return false;
    return true;
  }
}
