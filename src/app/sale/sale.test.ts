import { expect, should } from 'chai';
import { dbConnection } from '../app.database';

import { Sell } from './sale.class';
import { ISell } from './sale.interface';

import { ICake } from '../cake/cake.interface';

import { mock, instance, when, deepEqual } from "ts-mockito";
import { SaleService } from './sale.service';
import { CakeStatus } from '../cake/cake.enum';

const mockedsaleService: SaleService = mock(SaleService);
const saleService: SaleService = instance(mockedsaleService);

const cakeValues: ICake = {
  name: 'Test Sale Name',
  description: 'My test Sale for testing',
  ingredients: ['','',''],
  price: 100,
  stock: 3
  ,status: CakeStatus.Available
}

const sellValues: ISell = {
  customerName: 'Customer Test',
  customerPhoneNumber: '88886666111',
  customerEmail: 'test@test.com',
  totalAmount: 100,
  cakeId: 'cake_id_643',
  cake: cakeValues,
  quantity: 1,
};

when(mockedsaleService.create(deepEqual(sellValues))).thenResolve('mocked_id');

describe('Sale', () => { 

  let sell: Sell;

  beforeEach(() => {
    sell = new Sell();
    return true;
  });

  describe('#save', () => {
    it('Should return an ID', async () => {
      try {
        const id = await saleService.create(sellValues);
        console.log(id);
        expect(id).to.be.eq('mocked_id');
      } catch (error) {
        should().fail();
      }
    });

   });

});

