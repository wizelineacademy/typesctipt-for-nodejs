import { CackeStatus } from '../enums/cackestatus';

export interface ICacke  {
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    stock: number;
    status: CackeStatus;
}