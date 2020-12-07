import { connection } from 'mongoose';
import { CakeService } from '../cakes/cake.service';
import { IDBModel } from '../db-model.interface';
import { ISale } from './sale.interface';
import { SaleService } from './sale.service';
import { PerformSaleBody } from './sale.types';
import { ISoldCake } from './sold-cake.interface';

export type SaleInjection = {
    saleService?: SaleService;
    cakeService?: CakeService;
}

export class Sale implements ISale, IDBModel {
    private saleService: SaleService;
    private cakeService: CakeService;

    _id: string;
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    totalAmount: number;
    date: Date;
    cake: ISoldCake;
    
    constructor(model?: ISale, injection?: SaleInjection) {
        this.setSale(model);
        this.saleService = injection?.saleService || new SaleService(connection);
        this.cakeService = injection?.cakeService || new CakeService(connection);
    }

    get _sale(): ISale {
        return {
            customerName: this.customerName,
            customerPhoneNumber: this.customerPhoneNumber,
            customerEmail: this.customerEmail,
            totalAmount: this.totalAmount,
            date: this.date || new Date(), 
            cake: this.cake
        } as ISale
    }

    set _sale(values: ISale) {
        this.setSale(values);
    }

    setSale(values?: ISale): void {
        if(values) {
            this.customerName = values.customerName;
            this.customerPhoneNumber = values.customerPhoneNumber;
            this.customerEmail = values.customerEmail;
            this.totalAmount = values.totalAmount;
            this.cake = values.cake;
        }
    }
    setCake(values: ISoldCake) {
        this.cake = values;
    }

    validate(): boolean {
        // prop: customerName
        // rules: required, 3 char min, 50 char max
        if(!this.customerName) {
            this.throwValidationError('customerName', 'Is required');
        }
        if(this.customerName.length < 3 || this.customerName.length > 50) {
            this.throwValidationError('customerName', 'Should be between 3 and 50 characters');
        }
        
        // prop: customerPhoneNumber
        // rules: required, 10 char min, numbers, -, + and spaces only allowed
        if(!this.customerPhoneNumber) {
            this.throwValidationError('customerPhoneNumber', 'Is required');
        }
        if(this.customerPhoneNumber.length < 10) {
            this.throwValidationError('customerPhoneNumber', 'Should be at least 10 chars long');
        }
        const phoneRegex = RegExp(/[\d-+ ]+/);
        const testPhoneResult = phoneRegex.test(this.customerPhoneNumber);
        if(!testPhoneResult) {
            this.throwValidationError('customerPhoneNumber', 'Invalid format');
        }

        // prop: customerEmail
        // rules: optional, 5 char min, 100 char max, email format
        if(this.customerEmail) {
            if(this.customerEmail.length < 5 || this.customerEmail.length > 100) {
                this.throwValidationError('customerEmail', 'Should be between 5 and 100 characters');
            }
            const emailRegex = RegExp(/^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/);
            const testEmailResult = emailRegex.test(this.customerEmail);
            if(!testEmailResult) {
                this.throwValidationError('customerEmail', 'Invalid format');
            }
        }

        // prop: totalAmount
        // rules: required, 3 char min, 50 char max
        if(this.totalAmount === null || this.totalAmount === undefined) {
            this.throwValidationError('totalAmount', 'Is required');
        }
        if(this.totalAmount <= 0) {
            this.throwValidationError('totalAmount', 'Should be greater than 0');
        }

        return true;
    }

    throwValidationError(property: string, message: string) {
        throw new Error(`Sale.${property} - ${message}`)
    }

    async save(): Promise<ISale> {
        this.validate();
        return await this.saleService.save(this._sale);
    }
    async get(): Promise<ISale[]> {
        return await this.saleService.getAll();
    }
    async getById(id: string): Promise<ISale> {
        return await this.saleService.get(id);
    }
    async remove(id: string): Promise<ISale> {
        return await this.saleService.delete(id);
    }
    async patch(id: string, model: ISale): Promise<ISale> {
        return await this.saleService.update(id, model);
    }
    async processSale(cakeId: string, quantity: number): Promise<ISale> {
        if(cakeId) {
            const cake = await this.cakeService.deductFromStock(cakeId, quantity);
            
            this.totalAmount = cake.price * quantity;
            this.setCake({
                    name: cake.name,
                    description: cake.description,
                    ingredients: cake.ingredients,
                    price: cake.price,
                    quantity: quantity
                } as ISoldCake);

            return await this.save();
        }
        throw new Error('Cake not provided')
    }

    async getByWeek(year: number, week: number): Promise<ISale[]> {
        return await this.saleService.getAll();
    }
}