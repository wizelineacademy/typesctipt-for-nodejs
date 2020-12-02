import mongoose, { Schema } from "mongoose"
import { Ingredient } from "../class/ingredient.class";

export const CakeSchema: Schema = new Schema ({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true
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
