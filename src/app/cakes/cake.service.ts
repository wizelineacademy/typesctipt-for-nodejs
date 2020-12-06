import { Connection } from 'mongoose';
import { DataService } from '../components/data-service.component';
import { ICake } from './cake.interface';
import { modelName } from './cake.model';

export class CakeService {
    private dataService: DataService<ICake>;

    constructor(connection: Connection) {
        this.dataService = new DataService(connection, modelName);
    }

    getAll = async (): Promise<ICake[]> => {
        return this.dataService.getAll();
    }

    get = async (id: string): Promise<ICake> => {
        return this.dataService.get(id);
    }
    
    add = async (model: ICake): Promise<ICake> => {
        return this.dataService.insert(model);
    }
    
    update = async (id: string, model: ICake): Promise<ICake> => {
        return this.dataService.update(id, model)
    }
    
    delete = async (id: string): Promise<ICake> => {
        return this.dataService.remove(id)
    }
}
