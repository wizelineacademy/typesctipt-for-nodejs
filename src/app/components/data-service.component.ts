import { Connection, Document, Model, Schema } from 'mongoose';
import { iCake } from '../cake/cake.interface';

export class DataService<T> {
  readonly connection: Connection;
  readonly model: Model<T & Document>;

  constructor(connection: Connection, modelName: string, model: Schema) {
    this.connection = connection;
    this.model = this.connection.model(modelName, model);
  }

  fetchMany() {
    return this.model.find();
  }

  insert(data: T): Promise<T> {
    const model = new this.model(data);
    return model.save().then(() => {
      return model.id;
    });
  }

  selectById(id: string) {
    return this.model.findById(id, function (error, cake) {
      if (error) {
        return error;
      }
      return cake;
    });
  }

  updateById(id: string, cake: T) {
    return this.model.findByIdAndUpdate(id, cake, function (error, result) {
      if (error) {
        return error;
      }
      return result;
    });
  }

  aggregateByWeekYear(week: number, year: number) {
    return this.model.aggregate([
      {
        $match: {
          $expr: {
            $eq: [
              { $week: '$createdAt' },
              { $week: new Date(year, 0, week * 7) },
            ],
          },
        },
      },
      { $project: { customerName: 1, totalAmount: 1 } },
    ]);
  }
}

export type DataInjection = { dataService?: DataService<Schema> };
