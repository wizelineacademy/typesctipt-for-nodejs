import { expect, should } from 'chai';
import { mock, instance, when, deepEqual } from 'ts-mockito';
import { Cake } from './cake.class';
import { ICake } from '../models/ICake';
import { CakeService } from './cake.service';
import { CakeStatus } from '../models';
import { CakeInjection } from '../app.di';

const cakeValues: ICake[] = [
  {
    description: 'Really Really Really Really Really Really Really Cake',
    name: 'Cheese Cake',
    price: 20.99,
    status: CakeStatus.Available,
    stock: 10,
    ingredients: ['Butter', 'Sugar', 'Milk'],
  },
];
const mockedCakeService: CakeService = mock(CakeService);
const cakeService: CakeService = instance(mockedCakeService);

const cakeServices: CakeInjection = {
  cakeService,
};

when(mockedCakeService.insert(deepEqual(cakeValues[0]))).thenResolve('some_id');
when(mockedCakeService.getById('some_id')).thenResolve(cakeValues[0]);
when(mockedCakeService.getMany()).thenResolve(cakeValues);

describe('Cake', () => {
  let cake: Cake;

  beforeEach(() => {
    cake = new Cake();
    return true;
  });

  describe('#makeCake', () => {
    it('Should return an ID', async () => {
      try {
        const cake: Cake = new Cake(cakeValues[0], cakeServices);
        const id = await cake.makeCake();
        expect(id).to.be.eq('some_id');
      } catch (error) {
        should().fail();
      }
    });
  });

  describe('#getCake', () => {
    it('Should return a CAKE', async () => {
      try {
        const cake: Cake = new Cake(cakeValues[0], cakeServices);
        const id = await cake.makeCake();
        expect(id).to.be.eq('some_id');
      } catch (error) {
        should().fail();
      }
    });
  });

  describe('#getCakes', () => {
    it('Should return an array of CAKES', async () => {
      try {
        const cake: Cake = new Cake(null, cakeServices);
        const cakes = await cake.getCakes();
        expect(cakes).to.be.eq(cakeValues);
      } catch (error) {
        should().fail();
      }
    });
  });
});
