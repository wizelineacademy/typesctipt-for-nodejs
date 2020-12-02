import { Document, Model, model, Types, Schema, Query } from "mongoose"
import { sale as saleClass } from '../class/sale.class'

const SaleSchema: Schema = new Schema ({
    id: {
        type: String,
        required: true,
        unique: true
    },
    customerName: {
        type: String,
        required: true
    },
    customerPhoneNumber: {
        type: String,
        required: true
    },
    customerEmail: {
        type: String,
        required: true
    },
    cakeId: {
        type: String,
        required: true
    },
    stock: {
        type: Number,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});
