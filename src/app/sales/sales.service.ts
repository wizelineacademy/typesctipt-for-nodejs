import { Connection } from "mongoose";
import { DataService } from "../../components/data-service.components";
import { ISale } from "./sale.interface";
import { SaleSchema } from "./sale.model";

class SaleService {
  private dbService: DataService<ISale>;

  constructor(conn: Connection) {
    this.dbService = new DataService(conn, SaleSchema, "Sale");
  }

  getSales() {
    return this.dbService.getMany();
  }

  createSale(sale: ISale) {
    return this.dbService.insert(sale);
  }

  updateSale(id: string, sale: ISale) {
    return this.dbService.update(id, sale);
  }

  deleteSale(id: string) {
    return this.dbService.delete(id);
  }

  getSale(id: string) {
    return this.dbService.getById(id);
  }
}

export { SaleService };
