import { Connection } from 'mongoose';

import { DBService } from '../../components/database-service.component';
import { CakeModel } from '../cake/cake.model';
import { ICake, ICakeQuery } from '../cake/cake.interface';

export class CakeService {
    private dbService: DBService<ICake, ICakeQuery>;

    constructor(conn: Connection) {
        this.dbService = new DBService(conn, 'Cake', CakeModel);
    }

    get(id: string) {
        return this.dbService.find(id);
    }

    getMany(query: ICakeQuery) {
        return this.dbService.findMany(query);
    }

    save(values: ICake) {
        return this.dbService.save(values);
    }

    update(values: ICake, id: string) {
        return this.dbService.update(values, id);
    }
}