import { connection } from 'mongoose';
import { IDBModel } from '../db-model.interface';
import { ISale } from './sale.interface';
import { SaleService } from './sale.service';
import { ISoldCake } from './sold-cake.interface';

export type SaleInjection = {
    saleService?: SaleService;
}

export class Sale implements ISale, IDBModel {
    private saleService: SaleService;

    _id: string;
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    totalAmount: number;
    cake: ISoldCake;
    
    constructor(model?: ISale, injection?: SaleInjection) {
        this.setSale(model);
        this.saleService = injection.saleService || new SaleService(connection);
    }

    get _sale(): ISale {
        return {
            customerName: this.customerName,
            customerPhoneNumber: this.customerPhoneNumber,
            customerEmail: this.customerEmail,
            totalAmount: this.totalAmount,
            cake: this.cake
        } as ISale
    }

    set _sale(values: ISale) {
        this.setSale(values);
    }

    setSale(values: ISale): void {
        this.customerName = values.customerName;
        this.customerPhoneNumber = values.customerPhoneNumber;
        this.customerEmail = values.customerEmail;
        this.totalAmount = values.totalAmount;
        this.cake = values.cake;
    }

    save(): Promise<ISale> {
        return this.saleService.add(this._sale);
    }
    get(): Promise<ISale[]> {
        return this.saleService.getAll();
    }
    getById(id: string): Promise<ISale> {
        return this.saleService.get(id);
    }
    remove(id: string): Promise<ISale> {
        return this.saleService.delete(id);
    }
    patch(id: string, model: ISale): Promise<ISale> {
        return this.saleService.update(id, model);
    }
}