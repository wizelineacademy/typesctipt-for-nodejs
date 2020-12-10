import { dbMain } from "../app.database";
import { CackeStatus } from "../cacke/enums/cackestatus";
import { CackeService } from "./cacke.service";
import { ICacke } from "./interfaces/cacke";

export class Cacke {
    private cackeService: CackeService;
    cacke: ICacke;

    constructor() {
        this.cackeService = new CackeService(dbMain);
    }

    getAllCackes(): Promise<ICacke[]> {
        return this.cackeService.getAllCakes();
    }

    getCacke(id: string): Promise<ICacke> {
        return this.cackeService.getCacke(id);
    }

    save(cacke: ICacke): Promise<string> {
        return this.cackeService.save(cacke);
    }
    
    update(id: string, model: ICacke) {
        return this.cackeService.edit(id,model);
    }

    static getNewCackeStatus(stock: number): CackeStatus {
        if (stock > 10) {
            return CackeStatus.Avaliable;
        }
        else if (stock < 10 && stock > 0) {
            return CackeStatus.LastUnits;
        }
        else {
            return CackeStatus.OutOfStock;
        }
      }
 } 