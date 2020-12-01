import { Connection, Document, Model, Schema, FilterQuery, QueryFindOptions } from 'mongoose';

import { ICakeQuery } from '../app/cake/cake.interface';

const buildQuery = (query: any) => {
    // const toExec: QueryFindOptions;

    // for (let [key, value] of Object.entries(query)) {
    //     toExec += `{ ${key}: '${value}' }`;
    // }

    // return toExec;
};

export class DBService<T, R> {
    readonly connection: Connection;
    readonly model: Model<T & Document & FilterQuery<R>>;

    constructor(conn: Connection, modelName: string, model: Schema) {
        this.connection = conn;
        this.model = this.connection.model(modelName, model);
    }
    
    find(id: string) {
        return this.model.findById(id);
    }

    findMany(query: R) {
        return this.model.find({});
    }

    async save(data: T): Promise<T> {
        const model = new this.model(data);
        
        return model.save();
    }

    async update(data: T, id: string): Promise<T | Error | null> {
        const resource = await this.model.findById(id);

        if (!resource) {
            return new Error('Resource was not found');
        }

        return this.model.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        });
    }
}