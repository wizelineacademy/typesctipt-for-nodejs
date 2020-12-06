 import { Connection, Model, Document } from 'mongoose';


export class DataService<T> {
    readonly connection: Connection;
    readonly model: Model<T & Document>;

    constructor(connection: Connection, modelName: string) {
        this.connection = connection;
        this.model = this.connection?.model(modelName);
    }

    getAll = (): Promise<T[]> => {
        return this.model.find({}).lean<T>().exec();
    }

    get = (id: string): Promise<T> => {
        return this.model.findById(id).lean<T>().exec();
    }

    insert = (data: T): Promise<T> => {
        const model = new this.model(data);
        return model.save();
    }

    update = async (id: string, data: T): Promise<T> => {
        return this.model.findByIdAndUpdate(id, data);
    }

    remove = (id: string): Promise<T> => {
        return this.model.findByIdAndRemove(id).then(q => {
            return q;
        });
    }
}