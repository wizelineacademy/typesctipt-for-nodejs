import { Connection } from 'mongoose';
import { Cake } from './cake.class';
import { ICake } from './cake.interface';
import { DataService } from '../../components/data-service.component';
import { modelName } from './cake.db-model';

export class CakeService { 
  private dataService: DataService<ICake>;

  constructor(connection: Connection) { 
    this.dataService = new DataService(connection, modelName);
  }

  getMany(): Promise<ICake[]> { 
    console.log('Service:: Getting cake...');
    return this.dataService.fetchMany();
  }

  getOneBy(id: string): Promise<ICake> { 
    console.log('Service:: Getting cake...');
    return this.dataService.fetchOne(id);
  }

  save(cake: ICake): Promise<string> {

    this.validateData( cake );

    return this.dataService.insert(cake);
  }

  /**
    Name: Required, 5 characters min., 50 characters max.
    Descrition: Required, 50 characters min., 1000 characters max.
    Ingredients: Required, at least 3 ingredientes. Per ingredient: 1 character min. 20 chareacters max.
    Price: Required, greater than 0.
    Stock: Required, greater than -1.
  */
  public validateData(cake: ICake) { 

    if (cake.name.length < 5 || cake.name.length > 50) { 
      throw new Error('Cake name incorrect!!');
    }
    if (cake.description.length < 50 || cake.description.length > 1000) { 
      throw new Error('Cake description incorrect!!');
    }
    if (cake.ingredients.length < 3) {
      throw new Error('Cake with not enough ingredients!!');
    } else { 
      cake.ingredients.forEach(ingredient => {
        if (ingredient.length < 1 || ingredient.length > 20) { 
          throw new Error(`Cake ingredient incorrect [${ingredient}]!!`);
        }
      });
    }
    if (! cake.price || cake.price <= 0) { 
      throw new Error('Cake price incorrect incorrect!!');
    }
    if (! cake.stock || cake.stock < 0) { 
      throw new Error('Cake stock quantity incorrect!!');
    }
  }

  update(cake: ICake): Promise<string> {

    return this.dataService.updateOne(cake);
  }

}
