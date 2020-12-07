import { iSell } from './../sell/sell.interface';
import { iCake } from './../cake/cake.interface';
import { dbConn } from './../app.database';
import { SellInjection, SellService } from './sell.service';
import { CakeInjection, CakeService } from './../cake/cake.service';
import { Cake } from './../cake/cake.class';

export class Sell implements iSell {
  private sellService: SellService;
  private cakeService: CakeService;

  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: iCake;

  constructor(
    sell: iSell,
    injection: SellInjection = {},
    injectionCake: CakeInjection = {}
  ) {
    this.sellService = injection.sellService || new SellService(dbConn);
    this.cakeService = injectionCake.cakeService || new CakeService(dbConn);
    this.customerName = sell.customerName;
    this.customerPhoneNumber = sell.customerPhoneNumber;
    this.customerEmail = sell.customerEmail;
    this.totalAmount = sell.totalAmount;
    this.cake = sell.cake;
  }

  get sell(): iSell {
    const sell: iSell = {
      customerName: this.customerName,
      customerPhoneNumber: this.customerPhoneNumber,
      customerEmail: this.customerEmail,
      totalAmount: this.totalAmount,
      cake: this.cake,
    };

    return sell;
  }

  /*
    BUSINESS RULES
    Each time that cake is sold, the stock should decrease depending on the quantity bought by the customer.
    Cannot be sold a quantity greater than the current stock.
  */

  updateStock() {
    this.cake.stock = this.cake.stock - this.totalAmount;
    const cake = new Cake(this.cake);
    const cakeObject = cake.cake;
    this.cakeService.updateById(this.cake.id as string, cakeObject);
  }

  validate(): string[] {
    let error: string[] = [];
    const min = (min: number, actual: number) => actual >= min;
    const max = (max: number, actual: number) => actual <= max;
    const phoneRegExp = /\s*(?:\+?(\d{1,3}))?([-. (]*(\d{3})[-. )]*)?((\d{3})[-. ]*(\d{2,4})(?:[-.x ]*(\d+))?)\s*/;
    const emailRegExp = /^([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})$/i;

    /* 
      Customer name: Required, 3 characters min., 50 characters max.
      Phone Number: Required, 10 characters min, Only numbers, spaces and the sing +.
      Email: Optional, 5 characters min. 100 characters max, email format.
      Cake ID: Required, should be a valid, should exists in the database.
      Quantity: Required, greater than 1.
    */

    if (this.customerName.length === 0) {
      error.push(`The customer name is required`);
    } else if (!min(3, this.customerName.length)) {
      error.push(
        `The customer name mustn't be smaller than 3 but was ${this.customerName.length}`
      );
    } else if (!max(50, this.customerName.length)) {
      error.push(
        `The cupcake name mustn't be greater than 50 but was ${this.customerName.length}`
      );
    }

    if (this.customerPhoneNumber.length === 0) {
      error.push(`The customer phone is required`);
    } else if (!min(10, this.customerPhoneNumber.length)) {
      error.push(
        `The customer phone mustn't be smaller than 10 but was ${this.customerPhoneNumber}`
      );
    } else if (!phoneRegExp.test(this.customerPhoneNumber)) {
      error.push(`The customer phone ${this.customerPhoneNumber} isn't valid`);
    }

    if (this.customerEmail && !emailRegExp.test(this.customerEmail)) {
      error.push(`The customer email ${this.customerEmail} isn't valid`);
    }

    if (this.cake === null) {
      error.push(
        `The customer cake id isn't valid, please provide a valid cake id`
      );
    } else if (this.cake.stock === 0) {
      error.push(`The cake is ${this.cake.status}`);
    } else if (this.totalAmount > this.cake.stock) {
      error.push(`The cake quantity isn't sufficient`);
    }

    return error;
  }
}
