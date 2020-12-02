import { DataService } from "../../components/data-service.component";
import { ICacke } from "./interfaces/cacke";
import { modelName } from './cacke.model';

export class CackeService {
  private dataService: DataService<ICacke>;

  constructor(db) {
    this.dataService = new DataService(db, modelName);
  }

  getAllCakes(): Promise<ICacke[]> {
    return this.dataService.fetchMany()
  }

  getCacke(id: string) {
    return this.dataService.get(id);
  }

  edit(id:string, model:ICacke) {
    console.log(model);
    return this.dataService.patch(id, model);
  }

  save(cacke: ICacke): Promise<string> {
    return this.dataService.insert(cacke);
  } 
  //TODO: This list can be filtered for a range of price or by ingredient
}