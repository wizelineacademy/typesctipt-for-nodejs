import { DataService } from "../../component/data.service";
import { BadRequestException, NotFoundException } from "../../component/http-exceptions";
import { CakeValidator } from "./cake.validator";
import { Cake } from "./data/cake.model";
import { CakeSchema } from "./data/cake.schema";
import {inject, injectable,registry} from "tsyringe";
import { DbManager } from "../app.db";


@injectable()
@registry([
    { token: "CakeDataService", useFactory: (c) =>{
        return new DataService('Cake', CakeSchema, c.resolve(DbManager))
    } }
  ])
export class CakeService{

    constructor(
        private validator: CakeValidator,
        @inject("CakeDataService")
        private dataService: DataService<Cake>
    ){
        
    }

    get(): Promise<Cake[]>{
        return this.dataService.fetchMany();
    }
    getById(id:string): Promise<Cake>{
        return this.dataService.fetchOne(id);
    }
    post(entity: Cake): Promise<Cake>{
        this.validator.execute(entity);
        return this.dataService.insert(entity);
    }
    delete(id: string): Promise<any>{
        return this.dataService.delete(id)
    }
    
    async put(id: string, entity: Cake): Promise<Cake | null>{
        let dbValue = await this.dataService.fetchOne(id);
        if(!dbValue){
            throw new NotFoundException();
        }
        const merged  = {
            ...dbValue,
            ...entity
        };
        this.validator.execute(merged);
        return this.dataService.update(id, merged);
    }

    async adjustCakeStock(id: string, amount: number){
        const cake = await this.getById(id);
        cake.stock = cake.stock - amount;
        if(cake.stock < 0) throw new BadRequestException("Not enough cakes");
        this.dataService.update(id, cake);
    }
}
