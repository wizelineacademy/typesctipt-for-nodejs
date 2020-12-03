import { Connection, Document, Model } from 'mongoose';

export class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T & Document>; // Union de tipos

  constructor(connection: Connection, modelName: string) {
    this.connection = connection;
    const models = this.connection.modelNames();
    this.model = this.connection.model(modelName);
  }

  fetchAll(): Promise<T[]> {
    return this.model.find({}).exec();
  }

  fetch(filter: any): Promise<T[]> {
    return this.model.find(filter).exec();
  }

  fetchOne(filter: any): Promise<T> {
    return this.model.findOne(filter).exec();
  }

  fetchOneById(id: string): Promise<T> {
    return this.model.findById(id).exec();
  }

  updateById(id: string, data: T): Promise<T> {
    return this.model.findByIdAndUpdate(id, data).exec();
  }

  deleteById(id: string): Promise<T> {
    return this.model.findByIdAndDelete(id).exec();
  }

  async insert(data: T): Promise<string> {
    const model = new this.model(data);
    const document = await model.save();
    return document.id;
  }
}
