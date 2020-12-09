import { DataService } from '../../components/data-service.component';
import { ISell } from './interfaces/Sell';
import { modelName } from './sell.model';

export class SellService {
  private dataService: DataService<ISell>;

  constructor(db) {
    this.dataService = new DataService(db, modelName);
  }

  save(sell: ISell): Promise<string> {
     return this.dataService.insert(sell);
  }

}