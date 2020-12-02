import { Connection } from 'mongoose';
import { ISell } from './sale.interface';
import { CakeStatus } from '../Cake/cake.enum';
import { DataService } from '../../components/data-service.component';
import { modelName } from './sale.db-model';
import { CakeService } from '../cake/cake.service';

export class SaleService { 
  private cakeService: CakeService;
  private dataService: DataService<ISell>;

  constructor(connection: Connection) { 
    this.dataService = new DataService(connection, modelName);
    this.cakeService = new CakeService(connection);
  }

  create(newSale:ISell):  Promise<string> { 
    console.log('Service:: creating Sale');
  
    console.log('Service:: Getting Cake in DB');
    return this.cakeService.getOneBy(newSale.cake._id)
      .then(cake => { 

        // 1. Each time that cake is sold, the stock should decrease depending on the quantity bought by the customer.
        // 2. Cannot be sold a quantity greater than the current stock.
        if (newSale.quantity > cake.stock) { 
          return 'Error, Cake out of stock';
        }
        cake.stock = cake.stock - newSale.quantity;

        // Business Rules:
        // Update Cake status according to:
        //  - When the stock is greater than 10, the status of the cake is Available.
        //  - When the stock is less than 10, the status of the cake is LastUnits.
        //  - When the stock is 0, the status of the cake is OutOfStock.
        if (cake.stock > 10) {
          cake.status = CakeStatus.Available
        }
        else if (cake.stock > 0 && cake.stock <= 10) {
          cake.status = CakeStatus.LastUnits
        } else { 
          cake.status = CakeStatus.OutOfStock
        }

        // Writing Cake to the DB

        return this.cakeService.update(cake);
      })
      .catch(err => { 
        console.log('Error updating data:', err);
        return err;
      })
      .then(() => { 
        return this.dataService.insert(newSale);
      })
  }

}
