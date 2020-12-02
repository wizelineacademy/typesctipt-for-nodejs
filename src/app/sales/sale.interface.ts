import { ICake } from "../cake/cake.interface";

interface ISale {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: ICake;
}

export { ISale };
