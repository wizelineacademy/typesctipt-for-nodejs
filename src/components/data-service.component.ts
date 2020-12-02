import { Connection, Document, Model } from "mongoose";

export class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T & Document>;

  constructor(connection: Connection, modelName: string) {
    this.connection = connection;
    this.model = this.connection.model(modelName);
  }

  delete() {
    // To be implemented
  }

  ferchMany(): Promise<T[]> {
    return this.model.find({}).lean().exec();
  }

  fetchOne() {
    // To be implemented
  }

  insert(data: T): Promise<string> {
    const model = new this.model(data);
    return model.save().then(() => {
      return model.id;
    });
  }

  update() {
    // To be implemented
  }
}
