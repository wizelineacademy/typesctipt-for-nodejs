import { dbConn } from './app.database';
import { CakeService } from './cake/cake.service';
import { SellService } from './sell/sell.service';

export type CakeInjection = {
	cakeService?: CakeService;
}

const cakeService = new CakeService(dbConn);

export const cakeInjection: CakeInjection = {
	cakeService,
}

export type SellInjection = {
	sellService?: SellService;
}

const sellService = new SellService(dbConn);

export const sellInjection: SellInjection = {
	sellService,
}