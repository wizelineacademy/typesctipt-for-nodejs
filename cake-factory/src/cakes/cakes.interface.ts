export enum CakeStatus {
  available= 'Available',
  lastUnits= 'LastUnits',
  outOfStock= 'OutOfStock'
}

interface Icake {
  id?: string,
  name: string,
  description: string,
  ingredients: string[],
  price: number,
  stock: number,
  status: CakeStatus
}

export default Icake
