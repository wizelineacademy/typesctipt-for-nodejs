let bread: string[] = [];

export const getBread = () => {
  return new Promise<string[]>((resolve, reject) => {
    setTimeout(() => {
      resolve(bread);
    }, bread.length * 100);
  })
}

export const makeBread = (quantity: number) => {
  return new Promise<string[]>((resolve) => {
    setTimeout(() => {
      const newBread = new Array(quantity).fill("🍞");
      bread = [...bread, ...newBread];
      resolve(newBread);
    }, quantity * 100);
  });
}
