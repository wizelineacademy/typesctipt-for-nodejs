import Cake from './models/cake.model';
// Memory data for mimic endpoints functionality...
let cakes: Cake[] = [];

/**
 * This service will return the list of cakes
 */
export const getCakes = () => {
  return new Promise<Cake[]>((resolve, reject) => {
    setTimeout(() => {
      // business logic
      resolve(cakes);
    }, cakes.length * 100);
  });
};

/**
 * This service will find a Cake  by name or ID
 * @param cakeName cake name/id to find and return it
 */
export const getCake = (cakeName: string) => {
  return new Promise<Cake | null>((resolve, reject) => {
    setTimeout(() => {
      // business logic
      // TO DO: find the cake
      // TO DO: return the cake
      resolve(cakes[0]);
    }, cakes.length * 100);
  });
};

/**
 * This service will create a new Cake into data base...
 * @param cakeData New cake data in an object
 */
export const makeCake = (cakeData) => {
  // console.log('cakeData', cakeData);
  // Business logic goes here
  const { name, description, ingredients, price, stock } = cakeData;
  const newCake: Cake = new Cake(name, description, ingredients, price, stock);
  return new Promise<Cake>((resolve, reject) => {
    setTimeout(() => {
      // update cakes collection
      cakes = [...cakes, newCake];
      console.log('New Cake was made!');
      resolve(newCake);
    }, cakes.length * 100);
  });
};

/**
 * This service will find and update a given Cake by id
 * @param cakeData Cake data to update the cake
 */
export const editCake = (cakeData) => {
  // console.log('cakeData', cakeData);
  // Business logic goes here
  const { name, description, ingredients, price, stock } = cakeData;
  // TO DO: find cake
  // TO DO: update cake
  const newCake: Cake = new Cake(name, description, ingredients, price, stock);

  return new Promise<Cake>((resolve, reject) => {
    setTimeout(() => {
      // update cakes collection
      // cakes = [...cakes, newCake];
      console.log('Cake was updated!');
      resolve(newCake);
    }, cakes.length * 100);
  });
};
