import { Connection, createConnection } from "mongoose";
import { DataService } from "../../components/data-service.component";
import { IBread } from "./bread.interface";
import { modelName } from "./bread.model";

export class BreadService {
  private dataService: DataService<IBread>;

  constructor(connection: Connection) {
    this.dataService = new DataService(connection, modelName);
  }

  getMany(): Promise<IBread[]> {
    return this.dataService.ferchMany();
  }

  save(bread: IBread): Promise<string> {
    return this.dataService.insert(bread);
  }
}
