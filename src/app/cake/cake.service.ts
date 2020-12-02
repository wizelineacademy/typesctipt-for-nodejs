import { DataService } from "../../component/data.service";
import { Cake } from "./data/cake.model";
import { CakeSchema } from "./data/cake.schema";


export class CakeService{

    constructor(
        private dataService: DataService<Cake> = new DataService('Cake', CakeSchema)
    ){
    }
    get(): Promise<Cake[]>{
        return this.dataService.fetchMany();
    }
    getById(id:string): Promise<Cake>{
        return this.dataService.fetchOne(id);
    }
    post(entity: Cake): Promise<Cake>{
        return this.dataService.insert(entity);
    }
    delete(id: string): Promise<any>{
        return this.dataService.delete(id)
    }
    put(id: string, entity: Cake): Promise<Cake | null>{
        return this.dataService.update(id, entity);
    }
}
