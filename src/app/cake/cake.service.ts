import { DataService } from '../../components/data-service.component';
import { ICake } from './interfaces/Cake';
import { modelName } from './cake.model';
import { Cake } from './cake.class';
import { ISell } from '../sell/interfaces/Sell';

export class CakeService{
    private dataService: DataService<ICake>;
    
    constructor(db){
        this.dataService = new DataService(db, modelName);
    }

    private changeStatusCake(cake: ICake){
        cake.status = Cake.getNewCakeStatus(cake.stock);
    }

    getAllCakes(): Promise<ICake[]>{
        return this.dataService.fetchMany();
    }

    getCake(id: string){
        return this.dataService.get(id);
    }

    edit(id: string, cake: ICake){
        this.changeStatusCake(cake);
        return this.dataService.patch(id, cake);
    }

    save(cake: ICake): Promise<string>{
        this.changeStatusCake(cake);
        return this.dataService.insert(cake);
    }

    /**Each time that cake is sold, the stock should decrease depending on the quantity bought by the customer. */
    async decresaseCakeStock(sell: ISell) {
        let cake = await this.getCake(sell.cakeId);
        const stock = cake.stock - sell.quantity;
        const status = Cake.getNewCakeStatus(cake.stock);
        var cakeUpdated: ICake = {
            stock: stock,
            status: status,
            name: cake.name,
            description: cake.description,
            price: cake.price,
            ingredients: cake.ingredients
        };
        await this.edit(sell.cakeId.toString(), cakeUpdated);
    }

    /**Cannot be sold a quantity greater than the current stock. */
    async isCakeAvaliableForSale(sell: ISell): Promise<boolean> {
        const cake = await this.getCake(sell.cakeId);
        if (cake.stock < sell.quantity) {
            return false;
        }
        return true;
    }

}