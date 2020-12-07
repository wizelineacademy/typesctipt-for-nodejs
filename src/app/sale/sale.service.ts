import { Connection } from 'mongoose';

import { DatabaseService } from '../../components/database-service.component';
import { ICake } from '../cake/cake.interface';
import { ISale } from './sale.interface';
import { modelName } from './sale.model';
import { modelName as cakeModelName } from '../cake/cake.model';

export class SaleService {
    private dbService: DatabaseService<ISale>;

    constructor(connection: Connection) {
        this.dbService = new DatabaseService(connection, modelName);
    }

    async sell(sale: ISale): Promise<string> {
        return this.dbService.insert(sale);
    }

    async updateCakeStock(id: string) {
        
    }
}