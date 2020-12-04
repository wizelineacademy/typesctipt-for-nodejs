import { Connection, Document, Model } from "mongoose";

export class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T & Document>;

  constructor(connection: Connection, modelName: string) {
    this.connection = connection;
    this.model = this.connection?.model(modelName);
  }

  ferchMany(): Promise<T[]> {
    return this.model.find({}).lean<T>().exec();
  }

  insert(data: T): Promise<string> {
    const model = new this.model(data);
    return model.save().then(() => {
      return model.id;
    });
  }
}
