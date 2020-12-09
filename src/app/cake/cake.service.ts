import { Connection } from 'mongoose';

import { DatabaseService } from '../../components/database-service.component';
import { ICake, ICakeQuery } from './cake.interface';
import { modelName } from './cake.model';

export class CakeService {
    private dbService: DatabaseService<ICake, ICakeQuery>;

    constructor(connection: Connection) {
        this.dbService = new DatabaseService(connection, modelName);
    }

    getOne(id?: string): Promise<ICake | null> {
        return this.dbService.fetch(id);
    }

    getMany(query: ICakeQuery): Promise<ICake[]> {
        return this.dbService.fetchMany(query);
    }

    save(cake: ICake): Promise<string> {
        return this.dbService.insert(cake);
    }

    update(cake: ICake, id?: string): Promise<ICake | null> {
        return this.dbService.update(cake, id);
    }
}