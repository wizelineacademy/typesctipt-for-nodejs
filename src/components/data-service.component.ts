import { Connection, Document, Model } from "mongoose";

export class DataService<T>{
    readonly connection: Connection;
    readonly model: Model<T & Document>;

    constructor(connection: Connection, modelName: string){
        this.connection = connection;
        this.model = this.connection?.model(modelName);
    }

    fetchMany<query>(filters: query): Promise<T[]>{
        try{
            return this.model.find(filters).lean<T>().exec();
        }catch(error){
            throw new Error('Something wrong with:' + error);
        }
        
    }

    findById(id: string): Promise<T>{
        try{
            return this.model.findById(id).exec();
        }catch(error){
            throw new Error('Something wrong with:' + error);
        }
    }

    findByIdAndUpdate(id: string, data: T): Promise<string>{
        try{
            return this.model.findByIdAndUpdate(id, data).then((model) => {
                return model._id;
            });
        }catch(error){
            throw new Error('Something wrong with:' + error);
        }
    }

    insert(data: T): Promise<string>{
        const model = new this.model(data);
        return model.save().then(() => {
            return model._id;
        });
    }

    /*findByIdAndSubtractStock(id: string, data: {} ): Promise<string>{
        try{
            return this.model.findByIdAndUpdate(id, data).then((model) => {
                console.log({model});
                return model._id;
            });
        }catch(error){
            throw new Error('Something wrong with:' + error);
        }
    }*/
}
