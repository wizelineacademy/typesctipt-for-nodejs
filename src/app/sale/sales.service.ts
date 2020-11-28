import Sale from './models/sale.model';
// Memory data for mimic endpoints functionality...
let sales: Sale[] = [];

export const getSales = () => {
  // business logic
  return new Promise<Sale[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(sales);
    }, sales.length * 100);
  });
};

/**
 * This service will create a new Sale into data base...
 * @param saleData New cake data in an object
 */
export const makeSale = (saleData) => {
  // console.log('saleData', saleData);
  // Business logic goes here
  const {
    customerNameme,
    customerPhoneNumber,
    customerEmail,
    totalAmount,
    cake,
  } = saleData;
  const newSale: Sale = new Sale(
    customerNameme,
    customerPhoneNumber,
    customerEmail,
    totalAmount,
    cake
  );
  return new Promise<Sale>((resolve, reject) => {
    setTimeout(() => {
      // update sales collection
      sales = [...sales, newSale];
      console.log('New Sale was made!');
      resolve(newSale);
    }, sales.length * 100);
  });
};
