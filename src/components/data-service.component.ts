import { Connection, Document, Model, Schema } from "mongoose"

export class DataService<T> {

    readonly connection: Connection;
    readonly model: Model<T & Document>;

    constructor(connection: Connection, modelName: string) {
        this.connection = connection
        this.model = this.connection?.model(modelName)
    }

    // fetchMany(): Promise<T[]> {

    //     return this.model.find({}).lean().exec();
    // }

    // insert(data: T): Promise<T> {
    //     const model = new this.model(data);
    //     return model.save().then(() => {
    //         return model;
    //     });
    // }    


    fetchMany(): Promise<T[]> {
        return this.model.find({}).lean<T>().exec();
    }

    insert(data: T): Promise<T> {
        let model = new this.model(data);
        return model.save()
    }
}