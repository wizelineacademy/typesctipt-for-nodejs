import { expect, should } from 'chai';
import { dbConn } from '../app.database';

import { Cake } from './cake.class';
import { cakeInjection, CakeInjection } from '../app.di';
import { CakeService } from './cake.service';
import { Status } from './cake-status.enum';

import { mock, when, deepEqual } from 'ts-mockito';

const mockedCakeService: CakeService = mock(CakeService);

const cakeValues = {
	id: 1,
	name: 'cake',
  descrition: 'description',
  ingredients: ['one', 'two'],
  price: 200,
  stock: 2,
  status: Status.Available
}

when(mockedCakeService.makeCake(deepEqual(cakeValues))).thenResolve({id: 'id'});
when(mockedCakeService.getMany()).thenResolve([cakeValues]);
when(mockedCakeService.update(1, cakeValues)).thenResolve(cakeValues);
when(mockedCakeService.delete(1)).thenResolve({id: 1});

describe('Cake', () => {
	let cake: Cake;

	beforeEach(() => {
		cake = new Cake(cakeInjection);
		return true;
	});

	describe('#save', () => {
		it('Should return an Id', async () => {
			try {
				let cakeService: CakeService = new CakeService(dbConn);
				const returnedId = await cakeService.makeCake(cakeValues);
				expect(returnedId).to.be.eq({id: 'id'});
			} catch (err) {
				should().fail();
			}
		})
	});

	describe('#getMany', () => {
		it('Should return array of objects', async () => {
			try {
				let cakeService: CakeService = new CakeService(dbConn);
				const returned = await cakeService.getMany();
				expect(returned).to.be.eq([cakeValues]);
			} catch (err) {
				should().fail();
			}
		})
	});

	describe('#update', () => {
		it('Should return an object updated', async () => {
			try {
				let cakeService: CakeService = new CakeService(dbConn);
				const returned = await cakeService.update(1, cakeValues);
				expect(returned).to.be.eq(cakeValues);
			} catch (err) {
				should().fail();
			}
		})
	});

	describe('#delete', () => {
		it('Should return the id confiming the object was deleted', async () => {
			try {
				let cakeService: CakeService = new CakeService(dbConn);
				const returned = await cakeService.delete(1);
				expect(returned).to.be.eq(1);
			} catch (err) {
				should().fail();
			}
		})
	});
})