import { Connection, Model, Document, DocumentQuery, FilterQuery} from "mongoose";

export class DataService<T> {
    readonly connection: Connection;
    readonly model: Model<T & Document>;

    constructor(
        connection: Connection,
        modelName: string
    ) {
        this.connection = connection;
        this.model = this.connection.model(modelName);
    }

    fetchMany() {
        return this.model.find({}).lean().exec();
    }

    get(id: string) {
        return this.model.findById(id).lean().exec();
    }

    patch(id: string, model: T): any {
        let opts = {
            runValidators: true, 
            setDefaultsOnInsert: true, 
            upsert: true,
            context: 'query'
          };
       return this.model.findByIdAndUpdate(id, model, opts);
    }
    
    insert(data: T): Promise<string> {
        const model = new this.model(data);
        return model.save().then(() => {
            return model.id;
        });
    }
}