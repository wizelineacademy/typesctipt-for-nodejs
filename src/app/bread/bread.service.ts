let bread: string[] = [];

export const getBread = () => {
  return bread;
}

export const makeBread = (quantity: number) => {
  const newBread = new Array(quantity).fill("🍞");
  bread = [...bread, ...newBread];
  return newBread;
}
