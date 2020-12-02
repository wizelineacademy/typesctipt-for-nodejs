import { dbMain } from "../app.database";
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

 }