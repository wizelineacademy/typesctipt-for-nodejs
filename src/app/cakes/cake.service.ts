import { Connection } from "mongoose"
import { DataService } from "../../components/data-service.component"
import { modelName } from "./cake.model"
import { Cake } from "./cake.class"
import { ICake } from "./cake.interface"
import { ISale } from "../sales/sale.interface"
import { CakeStatus } from "./cake.status.enum"

let cakes: Cake[] = []
export class CakeService {

    // Declare an instance of the db service, passing the cake interface to its generic type.
    private dataService: DataService<ICake>

    constructor(connection?: Connection) {
        this.dataService = new DataService(connection!, modelName)
    }

    getCakes(): Promise<ICake[]> {
        return this.dataService.fetchMany()
    }

    getById(cakeId: string): Promise<ICake> {
        return this.dataService.getOne(cakeId)
    }

    getCakeById(cakeId: string): Promise<ICake> {
        return this.dataService.getOne(cakeId)
    }

    save(cake: ICake): Promise<ICake> {
        return this.dataService.insert(cake)
    }

    update(id?: string, cake?: ICake): Promise<ICake> {
        return this.dataService.update(id, cake)
    }

    delete(id?: string, cake?: ICake): Promise<ICake> {
        return this.dataService.delete(id, cake)
    }

    async updateStock(sale: ISale,): Promise<ICake> {
        const cake = await this.getById(sale.cakeId)
        console.log(cake);
        if (cake.stock && sale.quantity) {
            cake.stock = cake.stock - sale.quantity
            if (cake.stock == 0) {
                cake.status = CakeStatus.OutOfStock;
            } else if (cake.stock > 0 && cake.stock < 10) {
                cake.status = CakeStatus.LastUnits;
            } else {
                cake.status = CakeStatus.Available;
            }
        }
        return this.dataService.update(cake._id, cake)

    }

}