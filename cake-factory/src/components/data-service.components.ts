import { Connection, Document, Model } from 'mongoose'

class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T extends Document>;

  // constructor(connection: Connection, modelName: string) {
  //   this.connection = connection;
  //   this.model = this.connection.model(modelName);
  // }

  // delete(id: string) {
  //   return this.model.findByIdAndDelete(id);
  // }

  // fetchMany(): Promise<T[]> {
  //   return this.model.find({}).lean().exec();
  // }

  // fetchOne(id: string) {
  //   return this.model.findById(id);
  // }

  // insert(data: T): Promise<string> {
  //   const model = new this.model(data);
  //   return model.save().then(() => {
  //     return model.id;
  //   });
  // }

  //  update(id: string, data: T) {
  //   return this.model.findByIdAndUpdate(id, data, {
  //     new: true,
  //     runValidators: true,
  //   });
  // }
}

export default DataService
