import { Connection } from "mongoose";
import { DataService } from "../../components/data-service.components";
import { Cake } from "./cake.model";
import { ICake } from "./cake.interface";

class CakeService {
  private dbService: DataService<ICake>;

  constructor(conn: Connection) {
    this.dbService = new DataService(conn, Cake, "Cake");
  }

  getCakes() {
    return this.dbService.getMany();
  }

  createCake(cake: ICake) {
    return this.dbService.insert(cake);
  }

  updateCake(cake: ICake, id: string) {
    return this.dbService.update(id, cake);
  }

  deleteCake(id: string) {
    return this.dbService.delete(id);
  }

  getCake(id: string) {
    return this.dbService.getById(id);
  }
}

export { CakeService };
