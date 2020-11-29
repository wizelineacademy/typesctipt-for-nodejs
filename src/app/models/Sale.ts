import { ICake } from "./Cake";

interface ISell {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: ICake;
}
