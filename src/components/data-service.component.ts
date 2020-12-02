import { Connection, Document, Model } from 'mongoose';

export class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T & Document>; // Union de tipos

  constructor(connection: Connection, modelName: string) {
    this.connection = connection;
    this.model = this.connection.model(modelName);
  }

  fetchMany(): Promise<T[]> {
    return this.model.find({}).lean().exec();
  }

  fetch(filter: any): Promise<T> {
    return this.model.find(filter).lean().exec();
  }

  fetchOneById(id: string): Promise<T> {
    return this.model.findById(id).lean().exec();
  }

  updateById(id: string, data: T): Promise<T> {
    return this.model.findByIdAndUpdate(id, data).lean().exec();
  }

  deleteById(id: string): Promise<T> {
    return this.model.findByIdAndDelete(id).lean().exec();
  }

  async insert(data: T): Promise<string> {
    const model = new this.model(data);
    const document = await model.save();
    return document.id;
  }
}
