import { Connection, Document, Model } from "mongoose";

export class DataService<T> { 
  readonly connection: Connection;
  readonly model: Model<T & Document>

  constructor(connection: Connection, modelName: string) {
    this.connection = connection;
    this.model = this.connection.model(modelName);
  }

  fetchMany(): Promise<T[]> {
    return this.model.find({}).lean().exec();
  }

  fetchOne(id: string): Promise<T> {
    return this.model.findById(id).lean().exec();
  }

  insert(data: T): Promise<string> {
    const model = new this.model(data);
    console.log('MODEL:',model);
    return model.save().then(() => { 
      return model.id
    });
  }

  updateOne(data: T): Promise<string> {
    console.log('MODEL:',data);
    return this.model.findByIdAndUpdate(data).then(() => { 
      return data
    });
  }

}