import { Connection, Document, Model, Schema } from "mongoose";

class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T & Document>;

  constructor(connection: Connection, model: Schema, modelName: string) {
    this.connection = connection;
    this.model = this.connection.model(modelName, model);
  }

  delete(id: string) {
    return this.model.findByIdAndDelete(id);
  }

  getMany(): Promise<T[]> {
    return this.model.find({}).lean().exec();
  }

  insert(data: T): Promise<T> {
    const model = new this.model(data);
    return model.save();
  }

  update(id: string, data: T) {
    return this.model.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });
  }

  getById(id: string) {
    return this.model.findById(id);
  }
}

export { DataService };
