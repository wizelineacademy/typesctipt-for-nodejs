import { expect, should } from 'chai';

import { Sale, SaleInjection } from './sale.class';
import { ISale } from './sale.interface';

const saleValues: ISale = {
    _id: 'sale1',
    customerName: 'Oscar Barba',
    customerEmail: 'oscar@mail.com',
    customerPhoneNumber: '+52 811-535-9387',
    date: new Date('2020-12-06T12:00:00'),
    totalAmount: 300,
    cake: {
        name: 'Cheesecake',
        price: 150,
        description: 'Cheesecake is a sweet dessert. The main layer consists of a mixture of cheese, eggs, and sugar',
        ingredients: ['Cream cheese', 'Flour', 'Milk'],
        quantity: 2
    }
};

import { SaleService } from './sale.service';
import { mock, instance, when, deepEqual } from 'ts-mockito';
import { CakeService } from '../cakes/cake.service';

const mockedSaleService: SaleService = mock(SaleService);
const saleService: SaleService = instance(mockedSaleService);
const mockedCakeService: CakeService = mock(CakeService);
const cakeService: CakeService = instance(mockedCakeService);

const saleServices: SaleInjection = {
  saleService,
  cakeService
};

when(mockedSaleService.save(deepEqual(saleValues))).thenResolve(saleValues);

describe('Sale', () => {

  let sale: Sale;

  beforeEach(() => {
    sale = new Sale(saleValues, saleServices);
    return true;
  });

  describe('#save', () => {

    it('Should return a valid sale', async () => {
      try {
        const sale: Sale = new Sale(saleValues, saleServices);
        const result = await sale.save();
        expect(result).to.be.eq(saleValues);
      } catch (error) {
        should().fail();
      }
    });

  });

  describe('#validateSale', () => {

    it('Should be valid sale', () => {
      try {
        const sale: Sale = new Sale(saleValues);
        const result = sale.validate();
        expect(result).to.be.true;
      } catch (error) {
        should().fail();
      }
    });

    it('Should throw invalid phone', () => {
      try {
        const badInput = {...saleValues, customerPhoneNumber: '333'};
        const sale: Sale = new Sale(badInput);
        sale.validate();
        should().fail();
      } catch (error) {
        expect(error.message).to.be.eq('Sale.customerPhoneNumber - Should be at least 10 chars long');
      }
    });

  });

  describe('#validateEmail', () => {

    it('Should return true', () => {
      try {
        sale.customerEmail = 'john.doe@mail.com';
        const result = sale.validate();
        expect(result).to.be.true;
      } catch (error) {
        should().fail();
      }
    });

    it('Should throw invalid', () => {
      try {
        sale.customerEmail = 'aaaaaaaaa.exe';
        sale.validate();
        should().fail();
      } catch (error) {
        expect(error.message).to.be.eq('Sale.customerEmail - Invalid format');
      }
    });

    it('Should throw email too short', () => {
      try {
        sale.customerEmail = 'a@a';
        sale.validate();
        should().fail();
      } catch (error) {
        expect(error.message).to.be.eq('Sale.customerEmail - Should be between 5 and 100 characters');
      }
    });

    it('Should throw totalAmount required', () => {
      try {
        sale.totalAmount = null;
        sale.validate();
        should().fail();
      } catch (error) {
        expect(error.message).to.be.eq('Sale.totalAmount - Is required');
      }
    });
  });
});