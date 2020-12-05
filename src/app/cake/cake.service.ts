import { ICake } from './cake.interface';
import { DataService } from '../../components/mongo-data-service-component';
import { CakeSchema, modelName } from './cake.model';
import { dbConn as connection } from '../app.db';

export class CakeService {
  private dataService: DataService<ICake>;

  constructor() {
    this.dataService = new DataService(connection, modelName, CakeSchema);
  }

  // insert
  createCake(cakeData: ICake): Promise<string> {
    console.log('inserting: ' + modelName);
    return this.dataService.insert(cakeData);
  }
  // getMany
  getCakes(): Promise<ICake[]> {
    console.log('getMany: ' + modelName);
    return this.dataService.fetchMany();
  }
  // getOneById
  getCake(cakeId: string): Promise<ICake> {
    console.log('getOneById: ' + modelName);
    return this.dataService.fetchOne(cakeId);
  }
  // updateOneById
  editCake(cakeId: string, cakeData: ICake): Promise<ICake> {
    console.log('updateOneById ' + modelName);
    return this.dataService.update(cakeId, cakeData);
  }
}
