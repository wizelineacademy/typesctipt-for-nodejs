import { ICackeSold } from "./cackeSold";

export interface ISell {
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    cackeId: string;
    cacke: ICackeSold;
    quantity: number;
}