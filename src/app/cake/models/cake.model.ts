import Bread from '../../bread/bread.model';

class Cake implements Bread {
  // properties
  name: string;
  description: string;
  ingredients: string[];
  price: number;
  stock: number;
  // constructor
  constructor(
    name: string,
    description: string,
    ingredients: string[],
    price: number,
    stock: number = 0
  ) {
    this.name = name;
    this.description = description;
    this.ingredients = ingredients;
    this.price = price;
    this.stock = stock;
  }
  // methods
  // getDetail(): string {
  //   return `name: ${this.name}, description: ${this.description}`;
  // }
  getDetail(): Cake {
    return this;
  }
}

export default Cake;

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
