import { db as dbMain } from "../app.database"
import { CakeInjection } from "../cakes/cake.class"
import { CakeService } from "../cakes/cake.service"
import { ISale } from "./sale.interface"
import { SaleService } from "./sale.service"

export type SaleInjection = {
    saleService?: SaleService
}

export class Sale implements ISale {

    private saleService: SaleService
    private cakeService: CakeService


    customerName: string
    customerPhoneNumber: string
    customerEmail: string
    totalAmount: number
    cakeId: string
    quantity: number

    constructor(values?: ISale, injection?: SaleInjection, cakeInjection?: CakeInjection) {

        this.setValues(values)
        this.saleService = injection?.saleService || new SaleService(dbMain);
        this.cakeService = cakeInjection?.cakeService || new CakeService(dbMain);
    }

    get values(): ISale {
        return {
            customerName: this.customerName,
            customerPhoneNumber: this.customerPhoneNumber,
            customerEmail: this.customerEmail,
            totalAmount: this.totalAmount,
            cakeId: this.cakeId,
            quantity: this.quantity
        }
    }

    set values(values: ISale) {
        this.setValues(values)
    }

    private setValues(values?: ISale) {
        if (values) {
            this.customerName = values.customerName
            this.customerPhoneNumber = values.customerPhoneNumber
            this.customerEmail = values.customerEmail
            this.totalAmount = values.totalAmount
            this.cakeId = values.cakeId
            this.quantity = values.quantity
        }
    }

    public async save() {
        await this.validateCakeId()
        await this.validateStock()
        this.validateCustomerName()
        this.validateEmail()
        this.validatePhone()
        this.validateQuantity()

        let sale = await this.saleService.sell(this.values);

        return sale;
    }

    public async update(id?: string) {
        // this.validateName()
        // this.validateDescription()
        // this.validateIngredients()
        // this.validateStock()
        // this.validatePrice()

        let cake = await this.saleService.update(id, this.values);

        return cake;
    }

    public async delete(id?: string) {

        let cake = await this.saleService.delete(id);

        return cake;
    }

    public async validateCakeId(): Promise<Boolean> {

        let cake = await this.cakeService.getById(this.cakeId)

        if (!cake) {
            throw new Error(`Cake id ${this.cakeId} is invalid.`)
        }
        return true
    }

    public async validateStock(): Promise<Boolean> {

        let cake = await this.cakeService.getById(this.cakeId)

        if (cake.stock && this.quantity) {

            if (cake.stock < this.quantity) {
                throw new Error(`Not enough stock (${cake.stock}) to fullfill order quantity (${this.quantity}).`)
            }

        } else {
            throw new Error(`Invalid parameters.`)
        }
        return true
    }

    public validateQuantity(): Boolean {

        const minQuantity: number = 1

        if (this.quantity == undefined) {
            throw new Error('Quantity cannot be empty.')
        } else {
            if (this.quantity < minQuantity) {

                throw new Error(`Quantity must be more than ${minQuantity}.`)
            }
        }

        return true
    }

    public validateCustomerName(): Boolean {
        const minLength: number = 3
        const maxLength: number = 50

        if (!this.customerName) {
            throw new Error('Customer name cannot be empty.')
        } else {
            if (this.customerName?.length < minLength) {
                throw new Error(`Customer name cannot have less than ${minLength} characters.`)
            }
            if (this.customerName?.length > maxLength) {
                throw new Error(`Customer name cannot have more than ${maxLength} characters.`)
            }
        }

        return true;
    }

    public validateEmail(): Boolean {
        const minLength: number = 5
        const maxLength: number = 100

        if (!this.customerEmail) {
            throw new Error('Customer email cannot be empty.')
        } else {
            if (this.customerEmail?.length < minLength) {
                throw new Error(`Customer email cannot have less than ${minLength} characters.`)
            }
            if (this.customerEmail?.length > maxLength) {
                throw new Error(`Customer email cannot have more than ${maxLength} characters.`)
            }
        }

        return true;
    }

    public validatePhone(): Boolean {

        const minLength: number = 10

        if (this.customerPhoneNumber == undefined) {
            throw new Error('Phone number cannot be empty.')
        } else {
            if (!(this.customerPhoneNumber.length >= minLength)) {
                throw new Error(`Phone number must have more than ${minLength} digits.`)
            }
        }
        return true
    }

}

