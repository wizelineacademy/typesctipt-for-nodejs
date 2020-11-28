

export type CakeStatus =  'Available' |'LastUnits' |'OutOfStock';

export interface Cake{
    id?: number;
    name: string
    description?: string
    ingredients?: string[]
    price?: number
    stock?: number
    status: CakeStatus
}