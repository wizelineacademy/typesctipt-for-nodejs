import { Connection, Document, Model, QueryFindOneAndUpdateOptions, QueryOptions, Schema } from "mongoose"

export class DataService<T> {

    readonly connection: Connection;
    readonly model: Model<T & Document>;

    constructor(connection: Connection, modelName: string) {
        this.connection = connection
        this.model = this.connection?.model(modelName)
    }

    fetchMany(): Promise<T[]> {
        return this.model.find({}).lean<T>().exec();
    }

    insert(data?: T): Promise<T> {
        let model = new this.model(data);
        return model.save()
    }

    update(id?: string, data?: T): Promise<T> {
        let options: QueryFindOneAndUpdateOptions = { new: true }
        return this.model.findByIdAndUpdate({ _id: id }, data, options).lean<T>().exec()
    }

    delete(id?: string, data?: T): Promise<T> {
        let options: QueryFindOneAndUpdateOptions = { new: true }
        return this.model.findByIdAndDelete({ _id: id }).lean<T>().exec()
    }

    getOne(id?: string, data?: T): Promise<T> {
        return this.model.findById(id).lean<T>().exec()
    }
}