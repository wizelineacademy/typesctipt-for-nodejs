import { expect, should } from 'chai';
import { mock, instance, when, deepEqual } from 'ts-mockito';

import { Cake, CakeInjection } from './cake.class';
import { CakeService } from './cake.service';
import { ICake } from './cake.interface';
import { Status } from './cake.enums';

const mockedCakeService: CakeService = mock(CakeService);
const cakeService: CakeService = instance(mockedCakeService);

const cakeServices: CakeInjection = { cakeService };

const cakeValues: ICake = {
    name: 'Brownie',
    description: 'Since posting our decadent Best Fudgy Cocoa Brownies a couple of years ago.',
    ingredients: ['Chocolate'],
    price: 125,
    stock: 5,
    status: Status.AVAILABLE
};

when(mockedCakeService.save(deepEqual(cakeValues))).thenResolve('some_id');

describe('Cake', () => {
    let cake: Cake;

    beforeEach(() => {
        cake = new Cake(cakeValues);
    });

    describe('#validateName', () => {
        it('should return true', () => {
            try {
                cake.name = 'This is a name';

                expect(cake.validateName()).to.be.true;
            } catch (error) {
                should().fail();   
            }
        });

        it('should return throw an error', () => {
            try {
                cake.name = '';
                cake.validateName();

                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.should be in range/);
            }
        })
    });
});