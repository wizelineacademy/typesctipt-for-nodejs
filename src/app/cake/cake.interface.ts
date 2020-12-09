import { Status } from './cake.enums';

export interface ICake {
    _id?: string;
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    stock: number;
    status: Status;
}

export interface ICakeParams {
    id?: string;
}

export interface ICakeQuery {
    price?: number;
    ingredient?: string;
}