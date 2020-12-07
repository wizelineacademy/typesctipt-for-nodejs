import { Connection } from 'mongoose';
import { iCake } from './cake.interface';
import { CakeSchema, modelName } from './cake.model';
import { DataService } from './../components/data-service.component';

export class CakeService {
  private dataService: DataService<iCake>;

  constructor(dbConn: Connection) {
    this.dataService = new DataService(dbConn, modelName, CakeSchema);
  }

  fetchAll() {
    return this.dataService.fetchMany();
  }

  getById(id: string) {
    return this.dataService.selectById(id);
  }

  insert(cake: iCake) {
    return this.dataService.insert(cake);
  }

  updateById(id: string, cake: iCake) {
    return this.dataService.updateById(id, cake);
  }
}

export type CakeInjection = { cakeService?: CakeService };
