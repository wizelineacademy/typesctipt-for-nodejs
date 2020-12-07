import { Connection } from "mongoose"
import { DataService } from "../../components/data-service.component"
import { modelName } from "./cake.model"
import { Cake } from "./cake.class"
import { ICake } from "./cake.interface"

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

    save(cake: ICake): Promise<ICake> {
        return this.dataService.insert(cake)
    }


}