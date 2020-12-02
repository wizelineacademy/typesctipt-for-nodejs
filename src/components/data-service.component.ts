import { Connection, Document, Model } from "mongoose";

export class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<Document>;

  constructor(connection: Connection, modelName: string) {
    this.connection = connection;
    this.model = this.connection.model(modelName);
  }

  FetchMany(): Promise<T[]> {
    return this.model.find({}).lean().exec();
  }

  FetchOne(id: String): Promise<T> {
    const item = this.model.findById(id).lean().exec();
    return item;
  }

  async Insert(data: T extends Document) : Promise<T> { //TODO: Fix this
    // Question for reviewer: The IDE says: '?' expected.ts(1005) in the closing parenthesis "Document)" but I don't understand why
    const model = new this.model(data);
    return model.save(()=>{
        return model;
    });
  }

  Update(docId: string, data: T): Promise<T> {
    let a = this.model.update({id:docId},data
    );
    return a;
  }
}
