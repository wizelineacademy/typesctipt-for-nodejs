import { Connection } from 'mongoose';

import { DBService } from '../../components/database-service.component';
import { SaleSchema } from '../sale/sale.model';
import { ISale, ISaleQuery } from './sale.interface';

export class SaleService {
    private dbService: DBService<ISale, ISaleQuery>;

    constructor(conn: Connection) {
        this.dbService = new DBService(conn, 'Sale', SaleSchema);
    }

    sell(values: ISale) {
        return this.dbService.save(values);
    }

    get(query: ISaleQuery) {
        return this.dbService.findMany(query);
    }
}