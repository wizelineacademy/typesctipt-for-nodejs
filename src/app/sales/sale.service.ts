import { Connection } from 'mongoose';
import { DataService } from '../components/data-service.component';
import { ISale } from './sale.interface';
import { modelName } from './sale.model';


export class SaleService {
    private dataService: DataService<ISale>;

    constructor(connection: Connection) {
        this.dataService = new DataService(connection, modelName);
    }

    getAll = async (): Promise<ISale[]> => {
        return this.dataService.getAll(); 
    }

    get = async (id: string): Promise<ISale> => {
        return this.dataService.get(id);
    }

    save = async (model: ISale): Promise<ISale> => {
        return this.dataService.insert(model)
    }

    update = async (id: string, model: ISale): Promise<ISale> => {
        return this.dataService.update(id, model);
    }

    delete = async (id: string): Promise<ISale> => {
        return this.dataService.remove(id);
    }
}