import { CakeService } from '../cake/cake.service';
import { dbConn } from '../app.database';
import { ISale } from './sale.interface';
import { SaleService } from './sale.service';
import { ICake } from '../cake/cake.interface';

export type SaleInjection = {
    saleService?: SaleService;
    cakeService?: CakeService;
}

export class Sale implements ISale {
    private saleService: SaleService;
    private cakeService: CakeService;

    customerName!: string;
    customerEmail!: string;
    customerPhoneNumber!: string;
    totalAmount!: number;
    cakeId!: string;

    constructor(values: ISale,  injection?: SaleInjection) {
        this.setValues(values);
        this.saleService = injection?.saleService || new SaleService(dbConn);
        this.cakeService =  injection?.cakeService || new CakeService(dbConn);
    }

    get getValues(): ISale {
        return {
            customerName: this.customerName,
            customerEmail: this.customerEmail,
            customerPhoneNumber: this.customerPhoneNumber,
            totalAmount: this.totalAmount,
            cakeId: this.cakeId
        };
    }

    set values(values: ISale) {
        if (values) {
            this.setValues(values);
        }
    }

    private setValues(values: ISale) {
        this.customerName = values.customerName;
        this.customerEmail = values.customerEmail;
        this.customerPhoneNumber = values.customerPhoneNumber;
        this.totalAmount = values.totalAmount;
        this.cakeId = values.cakeId;
    }

    public async sell() {
        const sale = await this.saleService.sell(this.getValues);
        
        await this.updateCakeStock();

        return sale;
    }

    public async updateCakeStock() {
        const cake = await this.cakeService.getOne(this.cakeId);

        if (cake) {
            const newCake: ICake = {
                name: cake.name,
                description: cake.description,
                ingredients: cake.ingredients,
                price: cake.price,
                stock: cake.stock - this.totalAmount,
                status: cake.status
            };

            await this.cakeService.update(newCake, this.cakeId);
        }
    }
}