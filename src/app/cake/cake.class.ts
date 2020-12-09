import { dbMain } from '../app.database';
import { CakeState } from '../cake/enums/CakeState';
import { CakeService } from './cake.service';
import { ICake } from './interfaces/cake';

export class Cake{
    private cakeService: CakeService;
    cake: ICake;

    constructor(){
        this.cakeService = new CakeService(dbMain);
    }

    getAllCakes(): Promise<ICake[]>{
        return this.cakeService.getAllCakes();
    }

    getCake(id: string): Promise<ICake>{
        return this.cakeService.getCake(id);
    }

    save(cake: ICake): Promise<string>{
        return this.cakeService.save(cake);
    }

    update(id: string, model: ICake){
        return this.cakeService.edit(id, model);
    }

    static getNewCakeStatus(stock: number): CakeState{
        if(stock > 10){
            return CakeState.Available;
        }
        else if(stock < 10 && stock > 0){
            return CakeState.LastUnits;
        }
        else{
            return CakeState.OutOfStock;
        }
    }
}