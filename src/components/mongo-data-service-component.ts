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
    return this.model.find({}).lean<T>().exec();
  }

  fetchOne(id: string): Promise<T> {
    return this.model.findById(id).lean<T>().exec();
  }
  // Data(Business rules) Validation should be previously performed on the entity.
  insert(data: T): Promise<string> {
    const model = new this.model(data);
    return model.save().then(() => {
      return model.id;
    });
  }
  // Data(Business rules) Validation should be previously performed on the entity.class
  async update(id: string, data: T): Promise<T> {
    const updatedModel = await this.model.findByIdAndUpdate(id, data, {
      new: true,
    });
    console.log('updatedModel', updatedModel);
    return updatedModel;
  }
  // No async function
  /*
    return this.model
      .findByIdAndUpdate(id, data, { new: true })
      .then((updatedModel) => {
        console.log('updatedModel', updatedModel);
        return updatedModel;
      });
  */
}
