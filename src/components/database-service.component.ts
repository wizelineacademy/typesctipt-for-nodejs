import { Connection, Document, Model } from 'mongoose';

export class DatabaseService<T> {
    readonly connection: Connection;
    readonly model: Model<T & Document>;

    constructor(connection: Connection, modelName: string) {
        this.connection = connection;
        this.model = this.connection?.model(modelName);
    }

    fetch(id?: string): Promise<T | null> {
        return this.model.findById(id).lean<T>().exec();
    }

    fetchMany(): Promise<T[]> {
        return this.model.find().lean<T>().exec();
    }

    async insert(data: T): Promise<string> {
        const model = new this.model(data);
        const result = await model.save();

        return result._id;
    }

    async update(data: T, id?: string): Promise<T | null> {
        const resource = await this.model.findById(id);

        if (!resource) {
            throw Error('Resource was not found');
        }

        return this.model.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true
        });
    }
}