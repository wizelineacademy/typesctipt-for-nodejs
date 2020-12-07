import { CackeStatus } from '../enums/cackestatus';
import { ICacke } from '../interfaces/cacke';

export const listCacke: ICacke[] = [
    {
        "name": "King Cacke",
        "description": "This is my first cacke",
        "ingredients": ["flour", "vanilla", "other"],
        "price": 25.50,
        "stock": 10,
        "status": CackeStatus.Avaliable
    },
    {
        "name": "Queen Cacke",
        "description": "This is my second cacke",
        "ingredients": ["flour", "vanilla", "other"],
        "price": 10.50,
        "stock": 0,
        "status": CackeStatus.OutOfStock
    }
]

export const avaliableCacke: ICacke = 
    {
        "name": "King Cacke",
        "description": "This is my first cacke",
        "ingredients": ["flour", "vanilla", "other"],
        "price": 25.50,
        "stock": 10,
        "status": CackeStatus.Avaliable
    }

export const outOfStockcacke: ICacke = 
    {
        "name": "King Cacke",
        "description": "This is my first cacke",
        "ingredients": ["flour", "vanilla", "other"],
        "price": 25.50,
        "stock": 0,
        "status": CackeStatus.OutOfStock
    }