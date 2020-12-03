import { dbMain } from './app.database';
import { CakeService } from '../app/cake/cake.service';
import { SalesService } from './sales/sales.service';

export type CakeInjection = {
  cakeService?: CakeService;
};
export type SalesInjection = {
  salesService?: SalesService;
};

const cakeService = new CakeService(dbMain);
const salesService = new SalesService(dbMain);

const cakeInjection: CakeInjection = {
  cakeService,
};
const salesInjection: SalesInjection = {
  salesService,
};

export { cakeInjection, salesInjection };
