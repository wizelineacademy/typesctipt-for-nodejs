import mongoose, { Document, Model, model, Types, Schema, Query } from "mongoose"
import { ICake } from '../interface/cake.interface'

export const CakeSchema: Schema = new Schema ({
    name: {
        type: String,
        required: true,
        unique: true
    },
    description: {
        type: String,
        required: true
    },
    ingredients: {
        type: Array,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    state: {
        type: String,
        required: true
    }
});


CakeSchema.pre<ICake>("save", function(next) {
    let err: Error;
    if (this.name.length < 3 || this.name.length > 50) {
        err = new Error ("Name validation failed. Length must be between 3 and 50 chars.")
    }
    if (this.description.length < 50 || this.description.length > 100) {
        err = new Error ("Description validation failed. Length must be between 50 and 100 chars.")
    }
    if (this.ingredients.length < 3) {
        err = new Error ("Ingredients validation failed. It must have at least 3 ingredients.")
    }
    this.ingredients.forEach(ingredient => {
        if (ingredient.name.length < 1 || ingredient.name.length > 20){
            err = new Error ("Ingredient " + ingredient.name + "is not compliant. Length must be between 1 and 20 chars")
        }
    });
    if (this.price < 0) {
        err = new Error ("Price validation failed. It must be greater than zero.")
    }
    if (this.stock < -1) {
        err = new Error ("Stock validation failed. It must be positive.")
    }
    const CorrectStates = ['Available', 'LastUnits', 'OutOfStock']
    if (! CorrectStates.includes(this.state)){
        err = new Error ("State validation failed. It should be 'Available', 'LastUnits' or 'OutOfStock'.")
    }
    next(err)
});

export default mongoose.model<ICake>('Cake', CakeSchema);