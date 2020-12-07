import { Status } from './cake.enums';

export interface ICake {
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    stock: number;
    status: Status;
}

export interface ICakeQuery {
    price?: string;
    ingredient?: string;
}