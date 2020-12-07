import { expect, should } from 'chai';
import { dbConn } from '../app.database';

import { Sell } from './sell.class';
import { sellInjection, SellInjection } from '../app.di';
import { ISell } from './sell.interface';
import { SellService } from './sell.service';

import { mock, instance, when, deepEqual } from 'ts-mockito';

const mockedSellService: SellService = mock(SellService);
const sellService: SellService = instance(mockedSellService);
const sellServices: SellInjection = {
	sellService
}

const sellValue = {
	id: 1,
  customerName: 'customer name',
  customerPhoneNumber: 'customer phone number',
  customerEmail: 'customer email',
	totalAmount: 1,
	cake: {
    name: 'cake name',
    descrition: 'description',
    ingredients: ['one', 'two'],
    price: 10,
    quantity: 1
  }
}

when(mockedSellService.makeSell(deepEqual(sellValue))).thenResolve({id: 'id'});
when(mockedSellService.getMany()).thenResolve([sellValue]);
when(mockedSellService.update(1, sellValue)).thenResolve(sellValue);
when(mockedSellService.delete(1)).thenResolve({id: 1});

describe('Cake', () => {
	let cake: Sell;

	beforeEach(() => {
		cake = new Sell(sellInjection);
		return true;
	});

	describe('#save', () => {
		it('Should return an Id', async () => {
			try {
				let sellService: SellService = new SellService(dbConn);
				const returnedId = await sellService.makeSell(sellValue);
				expect(returnedId).to.be.eq({id: 'id'});
			} catch (err) {
				should().fail();
			}
		})
	});

	describe('#getMany', () => {
		it('Should return array of objects', async () => {
			try {
				let sellService: SellService = new SellService(dbConn);
				const returned = await sellService.getMany();
				expect(returned).to.be.eq([sellValue]);
			} catch (err) {
				should().fail();
			}
		})
	});

	describe('#update', () => {
		it('Should return an object updated', async () => {
			try {
				let sellService: SellService = new SellService(dbConn);
				const returned = await sellService.update(1, sellValue);
				expect(returned).to.be.eq(sellValue);
			} catch (err) {
				should().fail();
			}
		})
	});

	describe('#delete', () => {
		it('Should return the id confiming the object was deleted', async () => {
			try {
				let sellService: SellService = new SellService(dbConn);
				const returned = await sellService.delete(1);
				expect(returned).to.be.eq(1);
			} catch (err) {
				should().fail();
			}
		})
	});
})