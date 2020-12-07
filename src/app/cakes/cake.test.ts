import { expect, should } from 'chai';

import { Cake, CakeInjection } from './cake.class';
import { ICake } from './cake.interface';

const cakeValues: ICake = {
    _id: 'cheesecake1',
    name: 'Cheesecake',
    price: 250,
    description: 'Cheesecake is a sweet dessert. The main layer consists of a mixture of cheese, eggs, and sugar',
    ingredients: ['Cream cheese', 'Flour', 'Milk'],
    stock: 15,
    status: CakeStatus.Available
};

import { CakeService } from './cake.service';
import { mock, instance, when, deepEqual } from 'ts-mockito';
import { CakeStatus } from './cake-status.enum';

const mockedCakeService: CakeService = mock(CakeService);
const cakeService: CakeService = instance(mockedCakeService);

const cakeServices: CakeInjection = {
  cakeService
};

when(mockedCakeService.save(deepEqual(cakeValues))).thenResolve(cakeValues);

describe('Cake', () => {

  let cake: Cake;

  beforeEach(() => {
    cake = new Cake(cakeValues, cakeServices);
    return true;
  });

  describe('#save', () => {

    it('Should return a valid cake', async () => {
      try {
        const cake: Cake = new Cake(cakeValues, cakeServices);
        const result = await cake.save();
        expect(result).to.be.eq(cakeValues);
      } catch (error) {
        should().fail();
      }
    });

  });

  describe('#validateCake', () => {

    it('Should be valid cake', () => {
      try {
        const cake: Cake = new Cake(cakeValues);
        const result = cake.validate();
        expect(result).to.be.true;
      } catch (error) {
        should().fail();
      }
    });

    it('Should throw at least 3 ingredients', () => {
      try {
        const badInput = {...cakeValues, ingredients: ['Cream cheese', 'Milk']};
        const cake: Cake = new Cake(badInput);
        cake.validate();
        should().fail();
      } catch (error) {
        expect(error.message).to.be.eq('Cake.ingredients - Should include at least 3 ingredients');
      }
    });

  });

  describe('#validateName', () => {

    it('Should return true', () => {
      try {
        cake.name = 'Birote';
        const result = cake.validate();
        expect(result).to.be.true;
      } catch (error) {
        should().fail();
      }
    });

    it('Should throw required', () => {
      try {
        cake.name = null;
        cake.validate();
        should().fail();
      } catch (error) {
        expect(error.message).to.match(/.*name.*required*/);
      }
    });

    it('Should throw name too short', () => {
      try {
        cake.name = 'pie';
        cake.validate();
        should().fail();
      } catch (error) {
        expect(error.message).to.match(/.*name.*5 and 50 char*/);
      }
    });

    it('Should throw name too long', () => {
      try {
        cake.name = 'Cheesecake '.repeat(10);
        cake.validate();
        should().fail();
      } catch (error) {
        expect(error.message).to.match(/.*name.*5 and 50 char*/);
      }
    });
  });
});