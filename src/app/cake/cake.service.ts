import { Connection } from 'mongoose';
import { iCake } from './cake.interface';
import { CakeSchema } from './cake.model';
import { DataService } from './../components/data-service.component';

export class CakeService {
  private dataService: DataService<iCake>;

  constructor(dbConn: Connection) {
    this.dataService = new DataService(dbConn, 'Cake', CakeSchema);
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
}
