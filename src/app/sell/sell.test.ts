import { expect, should } from 'chai';
import { mock, instance, when, deepEqual } from 'ts-mockito';

import { iSell } from './sell.interface';
import { SellService } from './sell.service';
import { Sell } from './sell.class';
import { CakeStatus } from './../cake/cake-status.enum';
import { iCake } from '../cake/cake.interface';

const sell: iSell = {
  totalAmount: 5,
  customerName: 'Fava Narvaez',
  customerPhoneNumber: '+553144333',
  customerEmail: 'marcela.narvaez@gmail.com',
  cake: {
    id: '5fcd7d55d8e94ca8b9aa3535',
    ingredients: ['Delicious cupcake wi', 'OutOfStock', 'OutOfStock'],
    price: 3,
    stock: 10,
    name: 'Este es el test de insert',
    description:
      'Delicious cupcake with vanilla Delicious cupcake with vanilla Delicious cupcake with vanilla cupcake',
    status: CakeStatus.Available,
  } as iCake,
};

const mockedSellService: SellService = mock(SellService);
const sellService: SellService = instance(mockedSellService);

when(mockedSellService.insert(deepEqual(sell))).thenResolve(sell);

describe('sell', () => {
  let sellValidate: Sell;

  beforeEach(() => {
    sellValidate = new Sell(sell);
    return true;
  });

  describe('#save', async () => {
    it('Should return a not valid sell', async () => {
      try {
        sellValidate.customerName = '';
        sellValidate.cake.id = '5fcd7d55d8e94ca8b9aa3535';
        const sell: Sell = new Sell(sellValidate);
        const validate = sell.validate();
        expect(validate).to.have.length(1);
      } catch (error) {
        should().fail();
      }
    });
  });
});
