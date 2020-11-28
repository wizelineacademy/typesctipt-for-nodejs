import * as dbservice from "../services/sales.db.service";
import { Sell } from "./sales.class";

export function registerSell(sell: Sell): Promise<boolean> {
  let resultPromise: Promise<boolean>;

  //TODO: Check in DB if the stock is enought before the sell
  resultPromise = dbservice.Insert(sell);

  return resultPromise;
}
