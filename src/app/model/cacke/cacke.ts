import { CackeStatus } from './status';

export interface Cacke  {
    name: string;
    description: string;
    ingredients: string[];
    price: number;
    stock: number;
    status: CackeStatus;
}