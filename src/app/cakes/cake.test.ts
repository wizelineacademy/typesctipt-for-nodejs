import { expect, should } from 'chai';
import { mock, instance, when, deepEqual } from 'ts-mockito';
import { dbMain } from '../app.database';

import { Cake, CakeInjection } from './cake.class';
import { ICake } from './cake.interface';
import { CakeService } from "./cake.service";
import { StatusCake } from './statusCake.enum';

const CAKE_ID = '5fcb09efff6ab352c8ddf54e';
const cakeValues: ICake = {
    name: "carrot cake",
    description: "It's deeply moist and filled with toasted pecans. Most of its flavor comes from brown sugar, cinnamon, ginger, nutmeg, and carrots. Ginger adds the most delicious zing, but it isn't overpowering at all. The cake is dense, but each forkful tastes super soft and extra lush.",
    ingredients: ['sugar', "carrot", "oil"],
    price: 200.89,
    stock: 16,
    status: StatusCake.Available
}

const mockedCakeService: CakeService = mock(CakeService);
const cakeService: CakeService = instance(mockedCakeService);

const cakeServices: CakeInjection = {
    cakeService
};

when(mockedCakeService.createCake(deepEqual(cakeValues))).thenResolve('some_id');
when(mockedCakeService.updateCake(CAKE_ID, deepEqual(cakeValues))).thenResolve('some_id_updated');

describe('Cake Unit Testing', () => {

    let cake: Cake;
    
    beforeEach(() => {
        cake = new Cake();
        return true;
    });

    describe('#Create New Cake', () => {
        it('Should return an ID', async () => {
            try{
                let cake: Cake = new Cake(cakeValues, cakeServices);
                const id = await cake.save();
                expect(id).to.be.eq('some_id');
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Update Cake', () => {
        it('Should return an ID', async () => {
            try{
                let cake: Cake = new Cake(cakeValues, cakeServices);
                const id = await cake.update(CAKE_ID);
                expect(id).to.be.eq('some_id_updated');
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Name cake validation', () => {
        it('Should return true', () => {
            try{
                cake.name = 'Cherry pie';
                const evaluation = cake.validateName();
                expect(evaluation).to.be.true; 
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Description cake validation', () => {
        it('Should return true', () => {
            try{
                cake.description = 'It is deeply moist and filled with toasted pecans. Most of its flavor comes from brown sugar, cinnamon, ginger, nutmeg, and carrots.';
                const evaluation = cake.validateDescription();
                expect(evaluation).to.be.true; 
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Ingredients cake validation', () => {
        it('Should return true', () => {
            try{
                cake.ingredients = ['sugar', 'cinnamon', 'ginger'];
                const evaluation = cake.validateIngredients();
                expect(evaluation).to.be.true; 
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Price cake validation', () => {
        it('Should return true', () => {
            try{
                cake.price = 19.90;
                const evaluation = cake.validatePrice();
                expect(evaluation).to.be.true; 
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Stock cake validation', () => {
        it('Should return true', () => {
            try{
                cake.stock = 19;
                const evaluation = cake.validateStock();
                expect(evaluation).to.be.true; 
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Get a List of cakes | validation', () => {
        it('All elements of type Cake', async () => {
            try{
                const cakesService = new CakeService(dbMain);
                const cakeList = await cakesService.getAllCakes({});
                cakeList.forEach(cake => {
                    expect(cake._id).to.not.be.null;
                    expect(cake).to.include.all.keys('_id','name', 'description', 'ingredients', 'price', 'stock', 'status');
                });
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Get a List of cakes with price filter | validation', () => {
        it('All elements should be have greater that 5 and lester that 50', async () => {
            try{
                const cakesService = new CakeService(dbMain);
                const cakeList = await cakesService.getAllCakes({price: { '$gt': 5, '$lt': 50 }});
                cakeList.forEach(cake => {
                    expect(+cake.price.toString()).to.be.above(5);
                    expect(+cake.price.toString()).to.be.below(50);
                });
            }catch(error){
                should().fail(error.message);
            }
        });
    });


    describe('#Get a List of cakes with ingredients filter | validation', () => {
        it('All elements should included milk on the ingredients', async () => {
            try{
                const cakesService = new CakeService(dbMain);
                const cakeList = await cakesService.getAllCakes({ingredients: { '$in': ['milk'] }});
                cakeList.forEach(cake => {
                    expect(cake.ingredients).to.include('milk');
                });
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Get Cake Details', () => {
        it('Should return a object with cake properties', () => {
            try{
                let cake: Cake = new Cake(cakeValues, cakeServices);
                const details = cake.getCakeDetails();
                expect(details).to.include.all.keys('name', 'description', 'ingredients', 'price', 'stock', 'status');
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Is exists Cake by Id', () => {
        it('Should return true', async () => {
            try{
                const cakesService = new CakeService(dbMain);
                const cakeInstance = await cakesService.getCakeInstance(CAKE_ID);
                expect(cakeInstance).to.be.an.instanceof(Cake);
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#There are stock', () => {
        it('Should return true', () => {
            try{
                let cake: Cake = new Cake(cakeValues, cakeServices);
                const evaluation = cake.isEnoughStock(10);
                expect(evaluation).to.be.true; 
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Check right status cake', () => {
        it('Should return true', () => {
            try{
                cake.stock = 9;
                cake.setStatus();
                expect(cake.status).to.equal(StatusCake.LastUnits);
            }catch(error){
                should().fail(error.message);
            }
        });
    });
});
