import { Connection } from 'mongoose';
import { DataService } from '../../components/data-service.component';
import { ISell } from '../models/index';
import { modelName } from './sales.model';

/**
 * This is a repository in the repository pattern.
 */
export class SalesService {
  private _salesDataService: DataService<ISell>;

  constructor(conn: Connection) {
    this._salesDataService = new DataService(conn, modelName);
  }

  async fetchAll(): Promise<ISell[]> {
    const sales = await this._salesDataService.fetchAll();
    return sales;
  }

  async sell(sale: ISell): Promise<string> {
    const saleId = await this._salesDataService.insert(sale);
    return saleId;
  }
}
