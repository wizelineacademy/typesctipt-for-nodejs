interface ISeller {
  name: string;
  sell(quantity: number): number
}

export { ISeller }