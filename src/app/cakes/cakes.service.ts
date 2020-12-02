import { createConnection } from "mongoose";
import { Cake } from "./cakes.class";

import { DataService } from "../../components/data-service.component";

export class CakeService {
  private dataService: DataService<Cake>;

  constructor() {
    const connection = createConnection("mongodb://localhost"); //TODO: Completar
    this.dataService = new DataService(connection, "Cake");
  }

  saveCake(cake: Cake): boolean {
    let resultPromise: Promise<unknown>;
    let success: boolean = false;
    if (cake.id == "") {
      resultPromise = this.dataService.Insert(cake);
    } else {
      resultPromise = this.dataService.Update(cake.id, cake);
    }
    resultPromise.then((result) => {
      success = result === true;
    });
    return true;
  }

  getCake(id: string): Promise<Cake> {
    let result = this.dataService.FetchOne(id);
    return result;
  }

  getCakes(): Promise<Cake[]> {
    let cakes: Cake[] = [];
    let result = this.dataService.FetchMany();
    return result;
  }
}
