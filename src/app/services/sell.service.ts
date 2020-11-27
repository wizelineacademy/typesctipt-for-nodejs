export const sellCake = () => {
  return new Promise((resolve, reject) => {
    console.info('Sell Cake');
    resolve('Sell Cake');
  });
};

export const lessCake = () => {
  return new Promise((resolve, reject) => {
    console.info('Less Cake');
    resolve('Less Cake');
  });
};
