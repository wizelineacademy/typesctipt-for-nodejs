import { CustomError } from '../../components/error.component';
import { dbMain } from '../app.database';
import { CakeInjection, SalesInjection } from '../app.di';
import { CakeService } from '../cake/cake.service';
import { ISell } from '../models/index';
import { SalesService } from './sales.service';

export class Sales implements ISell {
  private _salesService: SalesService;
  private _cakeService: CakeService;
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  quantity: number;
  cakeId: string;

  constructor(salesInjection?: SalesInjection, cakeInjection?: CakeInjection) {
    this._salesService =
      salesInjection?.salesService || new SalesService(dbMain);
    this._cakeService = cakeInjection?.cakeService || new CakeService(dbMain);
  }

  get values(): ISell {
    return {
      customerName: this.customerName,
      customerPhoneNumber: this.customerPhoneNumber,
      customerEmail: this.customerEmail,
      quantity: this.quantity,
      cakeId: this.cakeId,
    };
  }

  async makeSell(): Promise<string> {
    const cake = await this._cakeService.getById(this.cakeId);
    if (!cake) {
      throw new CustomError('The cake does not exists.');
    }
    if (this.quantity > cake.stock) {
      throw new CustomError('Not enough cakes to satisfy your request.');
    }

    const salesId = await this._salesService.sell(this.values);
    if (salesId) {
      cake.stock -= this.quantity;
      await this._cakeService.update(this.cakeId, cake);
    }
    return salesId;
  }
}
