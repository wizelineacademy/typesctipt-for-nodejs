import { Connection,Document, Model, Schema } from "mongoose";
import { DbManager } from "../app/app.db";
import { NotFoundException } from "./http-exceptions";



export class DataService<T>{
    readonly model: Model<T & Document>
    private conn: Connection;
    constructor(
        modelName: string,
        schema: Schema,
        readonly dbManger: DbManager
        ){
            this.conn = dbManger.dbMain;
            
            this.model = this.conn.model<T & Document>(modelName,schema)

    }

    async fetchOne(id: string): Promise<T>{
        const model = await  this.model.findById(id).then(item =>{

            return item as T
        })
        if(!model) throw new NotFoundException(`${this.model.modelName} not found`);
        return model;
    }

    fetchMany(): Promise<T[]>{
        return this.model.find({}).then(data =>{
            return data as T[];
        });
    }

    insert(item: T): Promise<T>{
        const entity = new this.model(item);
        return entity.save();
    }

    async delete(_id: any){
       const deleted = await this.model.deleteOne({
           _id
       });
       return deleted;
    }

    async update(id: string,data: T): Promise<T | null> {
        return this.model.findByIdAndUpdate(id, data, {
            new: true,
            runValidators: true,
        });
    }
}
