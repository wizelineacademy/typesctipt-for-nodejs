import { ISale } from './sale.interface';
import { ISellCake } from './sellCake.interface';
import { SaleService } from './sale.service';

type SaleInjection = { saleService: SaleService };

// Sale Class
class Sale implements ISale {
  // properties
  customerName: string;
  customerPhoneNumber: string;
  customerEmail: string;
  totalAmount: number;
  cake: ISellCake;
  // Service
  saleService: SaleService;

  // constructor
  constructor(sale: ISale, injection: SaleInjection) {
    this.saleService = injection.saleService || new SaleService();
    this.customerName = sale.customerName;
    this.customerPhoneNumber = sale.customerPhoneNumber;
    this.customerEmail = sale.customerEmail;
    this.totalAmount = sale.totalAmount;
    this.cake = sale.cake;
  }
  // methods
  getDetail(): Sale {
    return this;
  }
}

export default Sale;
