import { Connection } from 'mongoose';
import { DataService } from '../../components/data-service.component';
import { ICake } from '../models/index';

export class CakeService {
  private _dataService: DataService<ICake>;

  constructor(connection: Connection) {
    this._dataService = new DataService(connection, 'Cake');
  }

  getMany = async (): Promise<ICake[]> => this._dataService.fetchMany();

  getById = async (id: string): Promise<ICake> =>
    this._dataService.fetchOneById(id);

  async insert(cake: ICake): Promise<string> {
    const { name } = cake;
    const fetchedCake = await this._dataService.fetch({ name });
    if (cake.name == fetchedCake.name) {
      // Throw error
    } else {
      return this._dataService.insert(cake);
    }
  }

  async delete(id: string): Promise<ICake> {
    const fetchedCake = await this._dataService.fetchOneById(id);
    if (fetchedCake) {
      const deletedCake = await this._dataService.deleteById(id);
      return deletedCake;
    } else {
      // Throw error
    }
  }
}
