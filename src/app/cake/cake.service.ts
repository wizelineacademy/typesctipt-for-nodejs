import { CreateQuery, UpdateQuery } from 'mongoose'
import Cake from '../../types/model/cake.model'
import { ICake } from '../../types/interface/cake.interface'

async function MakeCake ({
    name,
    description,
    ingredients,
    price,
    stock
  }: CreateQuery<ICake>): Promise<ICake> {
    let state = stock >= 10 ? "Available" : stock > 0 && stock < 10 ? "LastUnits" : "OutOfStock"
    return Cake.create({
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
        console.log(error)
        throw error;
    });
}

async function GetCakes(): Promise<ICake> {
    return Cake.find()
    .catch((error: Error) => {
        throw error;
    })
}

async function GetCake(id: string): Promise<ICake> {
    return Cake.findById(id).catch((error: Error) => {
        throw error;
    })
}

async function EditCake (id: string, {
    name,
    description,
    ingredients,
    price,
    stock
}: UpdateQuery<ICake>): Promise<ICake>{
    let state = stock >= 10 ? "Available" : stock > 0 && stock < 10 ? "LastUnits" : "OutOfStock"
    return Cake.findByIdAndUpdate(id, {
        name,
        description,
        ingredients,
        price,
        stock,
        state
    }).then((data: ICake) => {
        return data
    }).catch((error: Error) => {
        throw error
    })
    
}

export default {
    MakeCake,
    GetCakes,
    GetCake,
    EditCake
};