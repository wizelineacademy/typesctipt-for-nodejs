import { Connection } from 'mongoose';

import { DatabaseService } from '../../components/database-service.component';
import { ISale, ISaleQuery } from './sale.interface';
import { modelName } from './sale.model';

export class SaleService {
    private dbService: DatabaseService<ISale, ISaleQuery>;

    constructor(connection: Connection) {
        this.dbService = new DatabaseService(connection, modelName);
    }

    async sell(sale: ISale): Promise<string> {
        return this.dbService.insert(sale);
    }

    async getMany(query: ISaleQuery): Promise<ISale[]> {
        return this.dbService.fetchMany(query);
    }
}