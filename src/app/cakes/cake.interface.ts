export interface ICake {
    _id?: string,
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number,
    status?: string
}

export interface ICakeFilter {
    price?: { $gt?: number, $lt?: number },
    ingredients?: { $in?: string[] };
}
