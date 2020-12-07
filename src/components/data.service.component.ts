import { Connection, Document, Model, FilterQuery } from 'mongoose';

export class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T & Document>;

  constructor(connection: Connection, modelName: string) {
    this.connection = connection;
    this.model = this.connection.model(modelName);
  }

  delete(data: T): Promise<T> {
    return this.model.findByIdAndDelete(data).then(() => {
      return data;
    });
  }

  fetchMany(): Promise<T[]> {
    return this.model.find({}).lean().exec();
  }

  fetchOne(query: FilterQuery<T & Document>): Promise<T> {
    return this.model.findOne(query).lean().exec();
  }

  insert(data: T): Promise<string> {
    const model = new this.model(data);
    return model.save().then(() => {
      return model.id;
    });
  }

  update(id: string, data: T): Promise<T> {
    return this.model.findByIdAndUpdate(id, data).then(() => {
      return data;
    });
  }
}
