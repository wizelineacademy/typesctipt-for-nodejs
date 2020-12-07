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
        return await this.dataService.getAll();
    }

    get = async (id: string): Promise<ICake> => {
        return await this.dataService.get(id);
    }
    
    save = async (model: ICake): Promise<ICake> => {
        return await this.dataService.insert(model);
    }
    
    update = async (id: string, model: ICake): Promise<ICake> => {
        return await this.dataService.update(id, model)
    }
    
    delete = async (id: string): Promise<ICake> => {
        return await this.dataService.remove(id)
    }

    deductFromStock = async (id: string, quantity: number): Promise<ICake> => {
        const cake = await this.get(id);
        if(cake.stock >= quantity) {
            cake.stock -= quantity;
            return this.update(cake._id, cake);
        }
        throw new Error('Insuficient cakes to deduct')
    }
}
