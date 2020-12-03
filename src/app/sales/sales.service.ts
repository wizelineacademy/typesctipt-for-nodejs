import { Connection } from 'mongoose';
import { DataService } from 'src/components/data-service.component';
import { ISell } from '../models/ISell';

/**
 * This is a repository in the repository pattern.
 */
export class SalesService {
  private _salesDataService: DataService<ISell>;

  constructor(conn: Connection) {
    this._salesDataService = new DataService(conn, 'sales');
  }

  async sell(sale: ISell): Promise<string> {
    const saleId = await this._salesDataService.insert(sale);
    return saleId;
  }
}
