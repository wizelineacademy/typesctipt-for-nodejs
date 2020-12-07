import { Connection } from 'mongoose';
import { iSell } from './sell.interface';
import { SellSchema, modelName } from './sell.model';
import { DataService } from './../components/data-service.component';

export class SellService {
  private dataService: DataService<iSell>;

  constructor(dbConn: Connection) {
    this.dataService = new DataService(dbConn, modelName, SellSchema);
  }

  fetchAll() {
    return this.dataService.fetchMany();
  }

  getById(id: string) {
    return this.dataService.selectById(id);
  }

  insert(sell: iSell) {
    return this.dataService.insert(sell);
  }

  updateById(id: string, sell: iSell) {
    return this.dataService.updateById(id, sell);
  }

  fetchByYearWeek(year: number, week: number) {
    return this.dataService.aggregateByWeekYear(year, week);
  }
}

export type SellInjection = { sellService?: SellService };
