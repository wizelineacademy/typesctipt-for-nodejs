import { ICake } from "../cake/cake.interface";
import { ISale } from "./sale.interface";

class Sale implements ISale {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: ICake;

  constructor(model: ISale) {
    this.customerName = model.customerName;
    this.customerPhoneNumber = model.customerPhoneNumber;
    this.customerEmail = model.customerEmail;
    this.cake = model.cake;
    this.totalAmount = model.totalAmount;
  }
}

export { Sale };
