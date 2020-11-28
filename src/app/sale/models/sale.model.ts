// Sales model
class Sell {
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: any;

  // Constructor
  constructor(
    customerName: string,
    customerPhoneNumber: string,
    customerEmail: string,
    totalAmount: number,
    cake: number = 0
  ) {
    this.customerName = customerName;
    this.customerPhoneNumber = customerPhoneNumber;
    this.customerEmail = customerEmail;
    this.totalAmount = totalAmount;
    this.cake = cake;
  }

  getDetail(): Sell {
    return this;
  }
}

export default Sell;

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
