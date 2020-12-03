import { Connection } from 'mongoose';
import { DataService } from '../../components/data-service.component';
import { ICake } from '@models';
import { modelName } from './cake.model';

/**
 * Class that interacts with the database (Like a repository)
 */
export class CakeService {
  private _dataService: DataService<ICake>;

  constructor(connection: Connection) {
    this._dataService = new DataService(connection, modelName);
  }

  getMany = async (): Promise<ICake[]> => this._dataService.fetchAll();

  getById = async (id: string): Promise<ICake> =>
    this._dataService.fetchOneById(id);

  getByName = async (name: string): Promise<ICake> =>
    this._dataService.fetchOne({ name });

  async insert(cake: ICake): Promise<string> {
    return this._dataService.insert(cake);
  }

  async update(id: string, cake: ICake): Promise<ICake> {
    const updatedCake = await this._dataService.updateById(id, cake);
    return updatedCake;
  }
}
