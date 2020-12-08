import { Connection } from "mongoose"
import { DataService } from "../../components/data-service.component"
import { modelName } from "./cake.model"
import { Cake } from "./cake.class"
import { ICake } from "./cake.interface"
import { ISale } from "../sales/sale.interface"
import { CakeStatus } from "./cake.status.enum"

let cakes: Cake[] = []

// Mockup services

// export const getCakes = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(cakes)
//         }, 100)
//     })
// }

// export const getCakesDb = () => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             resolve(cakes)
//         }, 100)
//     })
// }

// export const postCake = (postedData: any) => {
//     return new Promise<Cake>((resolve, reject) => {
//         setTimeout(() => {
//             const newCake = new Cake(postedData)
//             cakes.push(newCake)
//             resolve(newCake)
//         }, 100)
//     })
// }

// export const patchCake = async (cakeName: string, patchedData: any) => {
//     return new Promise<Cake>((resolve, reject) => {
//         setTimeout(() => {
//             let cakeToUpdate = cakes.find(cake => cake.name === cakeName)
//             if (cakeToUpdate != undefined) {
//                 let index = cakes.indexOf(cakeToUpdate)
//                 cakes[index] = { ...cakeToUpdate, ...patchedData }
//                 resolve(cakes[index])
//             } else {
//                 reject()
//             }
//         }, 100)
//     })
// }

// export const deleteCake = async (cakeName: string) => {
//     return new Promise<Cake>((resolve, reject) => {
//         setTimeout(() => {
//             let cakeToDelete = cakes.find(cake => cake.name === cakeName)
//             if (cakeToDelete != undefined) {
//                 let index = cakes.indexOf(cakeToDelete)
//                 cakes.splice(index, 1)
//                 // delete cakes[index]
//                 resolve(cakeToDelete)
//             } else {
//                 reject()
//             }
//         }, 100);
//     });

// }



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