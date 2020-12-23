import { dbMain } from "../app.database";
import { ISale } from "./sale.interface";
import { SaleService } from "./sale.service";
//import { Cake } from "../../app/cakes/cake.class";
import { CakeService } from "../../app/cakes/cake.service";

export type SaleInjection = {
    saleService?: SaleService;
}

export type CakeInjection = {
    cakeService?: CakeService;
}

export class Sale implements ISale{
    private saleService: SaleService;
    private cakeService: CakeService;
    _id: string;
    customerName: string;
    customerPhoneNumber: string;
    customerEmail: string;
    totalAmount: number;
    cakeId: string;
    quality: number;

    constructor( values?: ISale, saleInjection?: SaleInjection, cakeInjection?: CakeInjection ){
        this.setValues(values);
        this.saleService = saleInjection?.saleService || new SaleService(dbMain);
        this.cakeService = cakeInjection?.cakeService || new CakeService(dbMain);
        
    }

    get values(): ISale{
        return {
            customerName: this.customerName,
            customerPhoneNumber: this.customerPhoneNumber,
            customerEmail: this.customerEmail,
            totalAmount: this.totalAmount,
            cakeId: this.cakeId,
        }
    }

    set values(values: ISale){
        this.setValues(values);
    }

    private setValues(values: ISale){
        if(values){
            this.customerName = values.customerName;
            this.customerPhoneNumber = values.customerPhoneNumber;
            this.customerEmail = values.customerEmail;
            this.quality = values.quality;
            this.cakeId = values.cakeId;
            this.totalAmount = values.totalAmount;
        }
    }

    public getSaleDetails(){
        return {
            _id: this._id,
            customerName: this.customerName,
            customerPhoneNumber: this.customerPhoneNumber,
            customerEmail: this.customerEmail,
            totalAmount: this.totalAmount,
            cakeId: this.cakeId
        }
    }

    public async save(){
        this.validateCustomerName();
        this.validateCustomerPhoneNumber();
        if(this.customerEmail != null || undefined){
            this.validateCustomerEmail();
        }
        const isValidCake = await this.cakeValidation();
        if(isValidCake == true){
            this._id = await this.saleService.registerSale(this.values);
            return this._id;
        }
        
    }

    public validateCustomerName(): Boolean {
        //throw new Error('This a testing A2');
        const minLength: number = 3;
        const maxLength: number = 50;
        const hasNoValue: boolean = this.customerName == null || undefined;
        const minLengthInvalid: boolean = this.customerName?.length < minLength;
        const maxLengthInvalid: boolean = this.customerName?.length > maxLength;

        if(hasNoValue){
            throw new Error('Customer Name cannot be empty');
        }

        if(minLengthInvalid){
            throw new Error(`Customer Name cannot have less than ${minLength} characters.`);
        }

        if(maxLengthInvalid){
            throw new Error(`Customer Name cannot have more than ${maxLength} characters.`);
        }
        return true;
    }

    public validateCustomerPhoneNumber(): Boolean {
        const minLength: number = 10;
        const hasNoValue: boolean = this.customerPhoneNumber == null || undefined;
        const minLengthInvalid: boolean = this.customerPhoneNumber?.length < minLength;
        const regexValidation: boolean = /[\d|\+|\s]{10,}/.test(this.customerPhoneNumber);

        if(hasNoValue){
            throw new Error('Customer Phone Number cannot be empty');
        }

        if(minLengthInvalid){
            throw new Error(`Customer Phone Number cannot have less than ${minLength} characters.`);
        }

        if(!regexValidation){
            throw new Error(`Customer Phone Number has an incorrect format`);
        }
        return true;
    }

    public validateCustomerEmail(): Boolean {
        const minLength: number = 5;
        const maxLength: number = 100;
        const minLengthInvalid: boolean = this.customerEmail?.length < minLength;
        const maxLengthInvalid: boolean = this.customerEmail?.length > maxLength;
        const regexValidation: boolean = /^\S+@\S+\.\S+$/.test(this.customerEmail);

        if(minLengthInvalid){
            throw new Error(`Customer Email cannot have less than ${minLength} characters.`);
        }

        if(maxLengthInvalid){
            throw new Error(`Customer Email cannot have more than ${maxLength} characters.`);
        }

        if(!regexValidation){
            throw new Error(`Customer Email has an incorrect format`);
        }
        return true;
    }

    public async cakeValidation(): Promise<Boolean> {
        const cakeInstance = await this.cakeService.getCakeInstance(this.cakeId);
        const existCake: Boolean = cakeInstance.exists();
        const areStock: Boolean = cakeInstance.isEnoughStock(this.quality);

        if(!existCake){
            throw new Error(`The cake that you try to select it does not exist.`);
        }

        if(areStock){
            const wasSubtracted: Boolean = await cakeInstance.subtractStock(this.quality);
            if(wasSubtracted == true){
                this.calculateAndSetTotalAmount(cakeInstance.price);
            }
        }else{
            throw new Error(`There are only ${cakeInstance.stock} items on stock for this ${this.quality} items for sale request`);
        }
        return true;
    }

    public calculateAndSetTotalAmount(cakePrice: number){
        let totalPrice: number = this.quality * cakePrice;
        this.totalAmount = totalPrice;
    }

}
