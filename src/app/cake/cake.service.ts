import { Cake, CarrotCake, CakeStatus } from './cake.class';

let cake: Cake;

export const getData = () => {
  console.log('Service:: Getting cake...');
  return new Promise<Cake>((resolve) => { 
    setTimeout(() => {
      resolve(cake);
    }, 1000);
  });
}

export const getDataById = () => { 

}

export const create = () => { 
  console.log('Service:: Creating cake...');
  return new Promise<Cake>((resolve) => { 
    setTimeout(() => { 
      const newCake = new CarrotCake(
        'MyCarrotCake',
        'Cake made today',
        ['flour', 'carrots'],
        100.0,
        50,
        CakeStatus.Available
      );

      cake = newCake;

      console.log('Service:: Cake was created successfully:', cake);
      resolve(cake)
    }, 1000);
  });
}

export const update = () => { }
