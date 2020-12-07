import { expect, should } from 'chai';
import { mock, instance, when, deepEqual } from 'ts-mockito';

import { iCake } from './cake.interface';
import { CakeService } from './cake.service';
import { Cake } from './cake.class';
import { CakeStatus } from './cake-status.enum';

const cake: iCake = {
  ingredients: ['Delicious cupcake wi', 'OutOfStock', 'OutOfStock'],
  price: 3,
  stock: 10,
  name: 'Este es el test de insert',
  description:
    'Delicious cupcake with vanilla Delicious cupcake with vanilla Delicious cupcake with vanilla cupcake',
  status: CakeStatus.Available,
};

const mockedCakeService: CakeService = mock(CakeService);
const cakeService: CakeService = instance(mockedCakeService);

when(mockedCakeService.insert(deepEqual(cake))).thenResolve(cake);

describe('cake', () => {
  let cakeValidate: Cake;

  beforeEach(() => {
    cakeValidate = new Cake(cake);
    return true;
  });

  describe('#save', async () => {
    it('Should return a not valid cake', async () => {
      try {
        cakeValidate.stock = -5;
        const cake: Cake = new Cake(cakeValidate);
        const validate = cake.validate();
        expect(validate).to.have.length(1);
        cakeValidate.stock = 10;
        const insertCake = await mockedCakeService.insert(cakeValidate);
        expect(cakeValidate).to.have.property('name');
      } catch (error) {
        should().fail();
      }
    });
  });
});
