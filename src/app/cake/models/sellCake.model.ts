import Cake from './cake.model';

class SellCake extends Cake {
  // properties
  quantity: number;
  // Constructor
  constructor(
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    quantity: number
  ) {
    super(name, description, ingredients, price);
    this.quantity = quantity;
  }
  // methods

  getDetail(): SellCake {
    return this;
  }
}

export default SellCake;

// const cake = new Cake(
//   'Chocolate Cake',
//   'Es un pastel de Chocolate Cake.',
//   ['huevo', 'harina', 'leche'],
//   22,
//   1
// );
// {
//   name: 'Chocolate Cake',
//   description: 'Es un pastel de Chocolate Cake.',
//   price: 22,
//   stock: 1,
//   ingredients: ['huevo', 'harina', 'leche'],
// };
