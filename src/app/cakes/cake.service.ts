import { Connection } from "mongoose";
import { DataService } from "../../components/data-service.component";
import { ICake, ICakeFilter } from "../cakes/cake.interface";
import { Cake } from "./cake.class";
import { modelName } from "./cake.model";

type CakeClass = Cake;

export class CakeService {
    private dataService: DataService<ICake>;

    constructor(connection: Connection ){
        this.dataService =  new DataService(connection, modelName);
    }

    getAllCakes(filters: ICakeFilter ): Promise<ICake[]>{
        return this.dataService.fetchMany(filters);
    }

    public async getCakeInstance(id: string){
        const cakeValues = await this.dataService.findById(id);
        const cake: CakeClass = new Cake(cakeValues);
        return cake;
    }

    createCake(cake: ICake): Promise<string>{
        return this.dataService.insert(cake);
    }

    updateCake(id: string, cake: ICake): Promise<string>{
        return this.dataService.findByIdAndUpdate(id, cake);
    }
    
}
