import { Sell } from "../model/sell/sell";

export const postSell = (sell: Sell): Promise<Sell> => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            //Here will do the Logic to create the sell
            if (sell) {
                resolve(sell);
            } else {
                reject();
            }
        }, 1000);
  });
}