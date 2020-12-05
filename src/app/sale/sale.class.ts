import { ISale } from './sale.interface';
import { ISellCake } from './sellCake.interface';
import { SaleService } from './sale.service';
import { ICake } from '../cake/cake.interface';
// import { isValidObjectId } from 'mongoose';
import { SaleRequest } from './sale.types';

export type SaleInjection = { saleService: SaleService };

// Sale Class
export class Sale implements ISale {
  // properties
  _id: string;
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: ISellCake;
  // Data Service to be injected
  private saleService: SaleService;

  // constructor
  constructor(sale?: ISale, injection?: SaleInjection) {
    this.setValues(sale);
    this.saleService = injection?.saleService || new SaleService();
  }
  // Accessors
  get sale(): ISale {
    return {
      customerName: this.customerName,
      customerPhoneNumber: this.customerPhoneNumber,
      customerEmail: this.customerEmail,
      totalAmount: this.totalAmount,
      cake: this.cake,
    };
  }

  set sale(saleValues: ISale) {
    this.setValues(saleValues);
  }
  // methods
  setValues(saleValues: ISale): void {
    if (saleValues) {
      this.customerName = saleValues.customerName;
      this.customerPhoneNumber = saleValues.customerPhoneNumber;
      this.customerEmail = saleValues.customerEmail;
      this.totalAmount = saleValues.totalAmount;
      this.cake = saleValues.cake;
    }
  }
  // DAO logic through service
  public async save(catalogCake: ICake, saleRequest: SaleRequest) {
    if (!catalogCake) {
      throw new Error(`The requested Cake does not exist!`);
    }
    // prepare this sale to save...
    this.customerName = saleRequest.customerName;
    this.customerPhoneNumber = saleRequest.phoneNumber;
    this.customerEmail = saleRequest.email;
    // compute total amount
    this.totalAmount = catalogCake.price * saleRequest.quantity;
    this.cake = {
      cakeId: catalogCake._id,
      name: catalogCake.name,
      description: catalogCake.description,
      ingredients: catalogCake.ingredients,
      price: catalogCake.price,
      quantity: saleRequest.quantity,
    };
    // validate fields...
    this.validateFields(catalogCake);
    // save fields
    this._id = await this.saleService.createSale(this.sale);
  }

  private validateFields(catalogCake: ICake): void {
    this.validateCustomerName();
    this.validateCustomerPhoneNumber();
    this.validateCustomerEmail();
    this.validateQuantity();
    this.validateCurrentStock(catalogCake);
  }

  // Business Logic as required by the challenge
  validateCustomerName(): void {
    // Field Rules
    const minLength: number = 3;
    const maxLength: number = 50;
    const hasValue: boolean = !!this.customerName;
    // actual validation
    if (hasValue) {
      const isTooShort: boolean = this.customerName.length < minLength;
      const isTooLong: boolean = this.customerName.length > maxLength;
      if (isTooLong || isTooShort) {
        throw new Error(
          `The Customer's name is too ${
            isTooLong ? 'long' : 'short'
          }, its length must be between ${minLength} and ${maxLength} characters.`
        );
      }
    } else {
      throw new Error(`The Customer's Name is required.`);
    }
  }

  validateCustomerPhoneNumber(): void {
    // Field Rules
    const minLength: number = 10;
    const hasValue: boolean = !!this.customerPhoneNumber;
    // console.log('[phoneNumber]', this.customerPhoneNumber);
    // actual validation
    if (hasValue) {
      const isValidPhoneNumber: boolean = /^[+]*[\s0-9]{10,}$/.test(
        this.customerPhoneNumber
      );
      if (!isValidPhoneNumber) {
        throw new Error(
          `The Customer's Phone Number must have at least ${minLength} numbers, it can start with the '+' sign.`
        );
      }
    } else {
      throw new Error(`The Customer's Phone Number is required.`);
    }
  }

  validateCustomerEmail(): void {
    // Field Rules
    const minLength: number = 5;
    const hasValue: boolean = !!this.customerEmail;
    // actual validation
    if (hasValue) {
      // simple email validation with regex
      const isValidEmail: boolean = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
        this.customerEmail
      );
      if (!isValidEmail) {
        throw new Error(
          `The Customer's email must have at least ${minLength} characters and must be a valid email.`
        );
      }
    } else {
      throw new Error(`The Customer's email is required.`);
    }
  }

  validateQuantity(): void {
    // Field Rules
    const minQuantity: number = 1;
    const hasValue: boolean = !!this.cake.quantity;
    // actual validation
    if (hasValue) {
      if (this.cake.quantity < minQuantity) {
        throw new Error(
          `The cake quantity must be greater than ${minQuantity}`
        );
      }
    } else {
      throw new Error(`The Cake's quantity is required.`);
    }
  }
  // For the sake of clarity
  validateCurrentStock(catalogCake: ICake): void {
    // Field Rules
    // If the cake requested exists in DB
    if (catalogCake) {
      // check stock vs sale qty
      if (catalogCake.stock < this.cake.quantity) {
        throw new Error(`The cake is out of stock.`);
      }
    } else {
      throw new Error(`The Cake requested doesn't exist.`);
    }
  }
}
