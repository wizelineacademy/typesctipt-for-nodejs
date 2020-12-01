import { Connection, Document, Model, Schema } from 'mongoose';

export class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T & Document>;

  constructor(connection: Connection, modelName: string, model: Schema) {
    this.connection = connection;
    this.model = this.connection.model(modelName, model);
  }

  fetchMany() {
    return this.model.find({});
  }

  insert(data: T): Promise<T> {
    const model = new this.model(data);
    return model.save().then(() => {
      return model.id;
    });
  }

  selectById(id: string) {
    return this.model.findById(id);
  }
}
