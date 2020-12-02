import { createConnection } from 'mongoose';
import { ICake } from './cake.interface';
import { DataService } from '../../components/mogo-data-service-component';
import { CakeSchema, modelName } from './cake.model';
import { connString, mongoDBOptions } from '../app.db';

export class CakeService {
  private dataService: DataService<ICake>;

  constructor() {
    // mongo-dataservice connection
    const connection = createConnection(connString, mongoDBOptions);
    this.dataService = new DataService(connection, modelName, CakeSchema);
  }

  // insert
  createCake(cakeData: ICake): Promise<string> {
    console.log('insert');
    return this.dataService.insert(cakeData);
  }
  // getMany
  getCakes(): Promise<ICake[]> {
    console.log('getMany');
    return this.dataService.fetchMany();
  }
}
