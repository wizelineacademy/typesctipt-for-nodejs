import * as express from 'express'
import mongoose from 'mongoose'
import CakeSchema from '../../types/model/cake.model'
import { CreateQuery } from 'mongoose';
import { ICake } from '../../types/interface/cake.interface'
import { Ingredient } from '../../types/class/ingredient.class'

// let cakes: Cake[] = [];

const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const makeCake = async({
    name,
    description,
    ingredients,
    price,
    stock,
    state
  }: CreateQuery<ICake>) => {
    const id = uuidv4()
    return CakeSchema.create({
        id,
        name,
        description,
        ingredients,
        price,
        stock,
        state
      })
        .then((data: ICake) => {
          return data;
        })
        .catch((error: Error) => {
          throw error;
        });
}


// export const makeCake = (params: any) => {
//     const cake: CakeSchema = mongoose.model('Cake', CakeSchema)
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             console.log(params.body.name)
//             const newCake = new cakeClass(
//                 uuidv4(),
//                 params.body.name,
//                 params.body.description,
//                 params.body.ingredients,
//                 params.body.price,
//                 params.body.stock
//             )
//             cakes.push(newCake)
//             resolve(cakes)
//         }, Math.floor(Math.random() * Math.floor(1000)));
//     })
// }

export const getCakes = () => {
    return new Promise<Cake[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(cakes)
        }, cakes.length);
    })
}

export const getCake = (id: string) => {
    return new Promise<Cake>((resolve, reject) => {
        setTimeout(() => {
            console.log(id)
            cakes.forEach(cake => {
                console.log(cake)
                if(cake.id === id){
                    resolve(cake)
                }
                reject('Error while fetching the info')
            });
        }, cakes.length);
    })
}

export const editCake = (cakeToEdit: Cake, newInfo: express.Request) => {
    return new Promise<Cake>((resolve, reject) => {
        setTimeout(() => {
            console.log(cakeToEdit)
            cakeToEdit.name = newInfo.body.name
            cakeToEdit.description = newInfo.body.description
            cakeToEdit.ingredients = newInfo.body.ingredients
            cakeToEdit.price = newInfo.body.price
            cakeToEdit.stock = newInfo.body.stock
            cakeToEdit.state = newInfo.body.state
            resolve(cakeToEdit)
        }, cakes.length);
    })
}