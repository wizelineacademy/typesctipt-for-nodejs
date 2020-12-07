import { expect, should } from 'chai'
import { db as dbMain } from '../app.database'

import { Cake, CakeInjection } from './cake.class'
import { ICake } from './cake.interface';

import { mock, instance, when, deepEqual } from "ts-mockito";
import { CakeService } from './cake.service';

const cakeValues: ICake = {
    name: 'Red Velvet',
    description: 'Red velvet cake is traditionally a red, red-brown, crimson or scarlet-colored chocolate layer cake.',
    ingredients: ['vanilla', 'strawberry', 'cacao'],
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
                expect(error.message).to.match(/Cake.*name.*empty*/);
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

    describe('#validateDescription', () => {

        it('Should return true', () => {
            try {
                cake.description = 'Red velvet cake is traditionally a red, red-brown, crimson or scarlet-colored chocolate layer cake.';
                const result = cake.validateDescription();
                expect(result).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('Should throw required', () => {
            try {
                cake.validateDescription();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Cake.*description.*empty*/);
            }
        });

        it('Should throw description too short', () => {
            try {
                cake.description = 'ab';
                cake.validateDescription();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Cake.*description.*less*/);
            }
        });

        it('Should throw description too long', () => {
            try {
                cake.description = 'Red velvet cake is traditionally a red, red-brown, crimson or scarlet-colored chocolate layer cake.'.repeat(100);
                cake.validateDescription();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Cake.*description.*more*/);
            }
        });

    });

    describe('#validateIngredients', () => {

        it('Should return true', () => {
            try {
                cake.ingredients = ['Strawberry', 'Vanilla', 'Cocoa'];
                const result = cake.validateIngredients()
                expect(result).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('Should throw lack of ingredients', async () => {
            try {
                cake.ingredients = ['Strawberry', 'Vanilla'];
                cake.validateIngredients();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Cake.*must.*ingredients*/);
            }
        });

        it('Should throw lack of characters in ingredient', async () => {
            try {
                cake.ingredients = ['Cacao', 'Vanilla', ''];
                cake.validateIngredients();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Cake.*ingredient.*characters*/);
            }
        });

        it('Should throw excess of characters in ingredient', async () => {
            try {
                cake.ingredients = ['Asdfghjklqwertyuiopzxcvbnm', 'Vanilla', 'Cacao'];
                cake.validateIngredients();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Cake.*ingredient.*less.*characters*/);
            }
        });
    });

    describe('#validatePrice', () => {

        it('Should return true', () => {
            try {
                cake.price = 0.5;
                const result = cake.validatePrice();
                expect(result).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('Should throw required', () => {
            try {
                cake.validatePrice();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Cake.*price.*empty*/);
            }
        });

        it('Should throw invalid price', () => {
            try {
                cake.price = 0;
                cake.validatePrice();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Cake.*price.*must.*greater*/);
            }
        });
    });

    describe('#validateStock', () => {

        it('Should return true', () => {
            try {
                cake.stock = 0;
                const result = cake.validateStock();
                expect(result).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('Should throw required', () => {
            try {
                cake.validateStock();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Cake.*stock.*empty*/);
            }
        });

        it('Should throw invalid stock', () => {
            try {
                cake.stock = -1;
                cake.validateStock();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Cake.*stock.*must.*greater*/);
            }
        });
    });






});
