 import { Connection, Model, Document } from 'mongoose';


export class DataService<T> {
    readonly connection: Connection;
    readonly model: Model<T & Document>;

    constructor(connection: Connection, modelName: string) {
        this.connection = connection;
        this.model = this.connection?.model(modelName);
    }

    getAll = async (): Promise<T[]> => {
        return await this.model.find({}).lean<T>().exec();
    }

    get = async (id: string): Promise<T> => {
        return await this.model.findById(id).lean<T>().exec();
    }

    insert = (data: T): Promise<T> => {
        const model = new this.model(data);
        return model.save();
    }

    update = async (id: string, data: T): Promise<T> => {
        return await this.model.findByIdAndUpdate(id, data).then(res => {
            return res;
        });
    }

    remove = async (id: string): Promise<T> => {
        return await this.model.findByIdAndRemove(id).then(q => {
            return q;
        });
    }
}