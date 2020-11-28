let bread = ['bread'];
export const getBread = () => bread;

export const makeBread = async (quantity: number): Promise<string[]> => {
  bread = new Array(quantity).fill('bread');

  return bread;
};
