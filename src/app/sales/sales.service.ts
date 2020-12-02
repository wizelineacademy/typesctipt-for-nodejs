import { DataService } from "../../components/data-service.component";
import { createConnection } from "mongoose";
import { Sell } from "./sales.class";

export class SalesService {
  private dataService: DataService<Sell>;
  constructor() {
    const connection = createConnection("https://localhost/mongo");
    this.dataService = new DataService(connection, "Sell");
  }

  registerSell(sell: Sell): Promise<Sell> {
    let resultPromise: Promise<Sell>;

    //TODO: Check in DB if the stock is enought before the sell
    resultPromise = this.dataService.Insert(sell);

    return resultPromise;
  }
}
