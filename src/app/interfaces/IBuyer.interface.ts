import { Seller } from '../classes/Seller.class';

interface IBuyer {
  buy(seller: Seller, quantity: number, ingredient: number): number;
}


export { IBuyer }