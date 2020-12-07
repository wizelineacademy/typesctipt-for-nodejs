import { expect, should } from 'chai'
import { db as dbMain } from '../app.database'

import { Cake, CakeInjection } from './cake.class'
import { ICake } from './cake.interface';

import { mock, instance, when, deepEqual } from "ts-mockito";
import { CakeService } from './cake.service';

const cakeValues: ICake = {
    name: 'Red Velvet',
    description: 'Vanilla and Strawberry',
    ingredients: 'vanilla',
    price: 20,
    stock: 100
};



const mockedCakeService: CakeService = mock(CakeService);
const cakeService: CakeService = instance(mockedCakeService);

const cakeServices: CakeInjection = {
    cakeService
};

when(mockedCakeService.save(deepEqual(cakeValues))).thenResolve(cakeValues);

describe('Cake', () => {

    let cake: Cake;

    beforeEach(() => {
        cake = new Cake();
        return true;
    });

    describe('#save', () => {

        it('Should return a cake', async () => {
            try {
                const cake: Cake = new Cake(cakeValues, cakeServices);
                const result = await cake.save();
                expect(result).to.be.eq(cakeValues)
            } catch (error) {
                should().fail();
            }
        });

    });

    describe('#validateName', () => {

        it('Should return true', () => {
            try {
                cake.name = 'Red Velvet';
                const result = cake.validateName();
                expect(result).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('Should throw required', () => {
            try {
                cake.validateName();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Name.*empty*/);
            }
        });

        it('Should throw name too short', () => {
            try {
                cake.name = 'ab';
                cake.validateName();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Name.*less*/);
            }
        });

        it('Should throw name too long', () => {
            try {
                cake.name = 'Red Velvet'.repeat(10);
                cake.validateName();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Name.*more*/);
            }
        });

    });
});
