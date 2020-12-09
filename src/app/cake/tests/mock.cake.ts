import { CakeState } from '../enums/CakeState';
import { ICake } from '../interfaces/Cake';

export const listCake: ICake[] = [
    {
        "name": "King Cake",
        "description": "This is my first cake",
        "ingredients": ["flour", "vanilla", "other"],
        "price": 25.50,
        "stock": 10,
        "status": CakeState.Available
    },
    {
        "name": "Queen Cake",
        "description": "This is my second cake",
        "ingredients": ["flour", "vanilla", "other"],
        "price": 10.50,
        "stock": 0,
        "status": CakeState.OutOfStock
    }
]

export const avaliableCake: ICake = 
    {
        "name": "King Cake",
        "description": "This is my first cake",
        "ingredients": ["flour", "vanilla", "other"],
        "price": 25.50,
        "stock": 10,
        "status": CakeState.Available
    }

export const outOfStockcake: ICake = 
    {
        "name": "King Cake",
        "description": "This is my first cake",
        "ingredients": ["flour", "vanilla", "other"],
        "price": 25.50,
        "stock": 0,
        "status": CakeState.OutOfStock
    }