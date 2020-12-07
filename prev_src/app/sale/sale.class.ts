import { conn } from '../app.database';
import { ISale, ISaleQuery } from './sale.interface';
import { SaleService } from './sale.service';

export class Sale implements ISale {
    private saleService: SaleService;

    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    totalAmount: number;
    cakeId: string;

    constructor(values: ISale) {
        this.saleService = new SaleService(conn);

        this.customerName = values.customerName;
        this.customerPhoneNumber = values.customerPhoneNumber;
        this.customerEmail = values.customerEmail;
        this.totalAmount = values.totalAmount;
        this.cakeId = values.cakeId;
    }

    get values(): ISale {
        return {
            customerName: this.customerName,
            customerPhoneNumber: this.customerPhoneNumber,
            customerEmail: this.customerEmail,
            totalAmount: this.totalAmount,
            cakeId: this.cakeId
        };
    }

    sell(): Promise<ISale> {
        return this.saleService.sell(this.values);
    }

    get(query: ISaleQuery) {
        return this.saleService.get(query);
    }
}