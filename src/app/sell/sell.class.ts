import { iSell } from './../sell/sell.interface';
import { iCake } from './../cake/cake.interface';
import { dbConn } from './../app.database';
import { SellService } from './sell.service';

export class CakeSell implements iSell {
  private sellService: SellService;

  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: iCake;

  constructor(sell: iSell) {
    this.sellService = new SellService(dbConn);
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

  insert(): Promise<iSell> {
    return this.sellService.insert(this.sell);
  }

  getSellById(id: string) {
    return this.sellService.getById(id);
  }
}
