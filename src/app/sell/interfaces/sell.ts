import { ICackeSold } from "./cackeSold";
import { ICustomerInformation } from "./customerInformation";

export interface ISell {
    customerInformation: ICustomerInformation;
    cackeId: string;
    cacke: ICackeSold;
    quantity: number;
}