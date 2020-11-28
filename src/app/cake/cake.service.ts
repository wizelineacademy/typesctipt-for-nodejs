import * as express from 'express'
import { cake, cake as cakeClass} from '../../types/class/cake.class'

let cakes: cakeClass[] = []

const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const makeCake = (params: any) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(params.body.name)
            const newCake = new cakeClass(
                uuidv4(),
                params.body.name,
                params.body.description,
                params.body.ingredients,
                params.body.price,
                params.body.stock
            )
            cakes.push(newCake)
            resolve(cakes)
        }, Math.floor(Math.random() * Math.floor(1000)));
    })
}

export const getCakes = () => {
    return new Promise<cakeClass[]>((resolve, reject) => {
        setTimeout(() => {
            resolve(cakes)
        }, cakes.length);
    })
}

export const getCake = (id: string) => {
    return new Promise<cakeClass>((resolve, reject) => {
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

export const editCake = (cakeToEdit: cakeClass, newInfo: express.Request) => {
    return new Promise<cakeClass>((resolve, reject) => {
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