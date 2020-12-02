// data service component wih generics (Kind of a DAO?)
import { Connection, Document, Model, Schema } from 'mongoose';

export class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T & Document>;

  constructor(connection: Connection, modelName: string, schema?: Schema) {
    this.connection = connection;
    this.model = this.connection.model(modelName, schema);
  }

  delete() {
    // To be implemented
  }

  fetchMany(): Promise<T[]> {
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
