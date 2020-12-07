import { model, Schema, SchemaTypes } from "mongoose";

export const modelName = 'Cake'
export const collection = 'cakes'

model(modelName, new Schema({

    name: SchemaTypes.String,
    description: SchemaTypes.String,
    ingredients: SchemaTypes.String,
    price: SchemaTypes.Number,
    stock: SchemaTypes.Number,
    status: SchemaTypes.String
}, { versionKey: false }))

// export const CakeModel = new Schema({

//     name: {
//         required: true,
//         type: String,
//         minlength: 5,
//         maxlength: 50
//     },
//     description: {
//         required: true,
//         type: String,
//         minlength: 50,
//         maxlength: 1000
//     },
//     ingredients: {
//         required: true,
//         type: [{
//             type: String,
//             min: 1,
//             max: 20
//         }],
//         min: 3
//     },
//     price: {
//         required: true,
//         type: Number,
//         min: 1
//     },
//     stock: {
//         required: true,
//         type: Number,
//         min: 0
//     },
//     status: {
//         required: true,
//         type: String
//     }

//     //   price: number
//     //   stock: number
//     //   status: 'Available' | 'LastUnits' | 'OutOfStock'





// })