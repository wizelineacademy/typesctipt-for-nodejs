import { expect, should } from 'chai';
import { dbConnection } from '../app.database';

import { Cake } from './Cake.class';
import { ICake } from './Cake.interface';

import { mock, instance, when, deepEqual } from "ts-mockito";
import { CakeService } from './cake.service';
import { CakeStatus } from './cake.enum';

const mockedCakeService: CakeService = mock(CakeService);
const cakeService: CakeService = instance(mockedCakeService);

const cakeValues: ICake = {
  name: 'Test Cake Name',
  description: 'My test cake for testing',
  ingredients: ['','',''],
  price: 100,
  stock: 3,
  status: CakeStatus.Available
};

when(mockedCakeService.save(deepEqual(cakeValues))).thenResolve('mocked_id');

describe('Cake', () => { 

  let cake: Cake;

  beforeEach(() => {
    cake = new Cake();
    return true;
  });

  describe('#save', () => {
    it('Should return an ID', async () => {
      try {
        const id = await cakeService.save(cakeValues);
        console.log(id);
        expect(id).to.be.eq('mocked_id');
      } catch (error) {
        should().fail();
      }
    });

   });

});

