export const getCake = () => {
  return new Promise((resolve, reject) => {
    console.info('Get Cake');
    const cake = {
      name: 'test',
    };
    resolve(cake);
  });
};

export const makeCake = () => {
  return new Promise((resolve, reject) => {
    console.info('Make Cake');
    resolve('make Cake');
  });
};
