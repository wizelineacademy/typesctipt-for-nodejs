import { expect, should } from 'chai';
import { connect } from '../app/app.database';

import { ICake } from '../types/interface/cake.interface';
import { CakeSchema } from '../types/model/cake.model';
import { IIngredient } from '../types/interface/ingredient.interface';

const ingredientSugar: IIngredient = {
    "name":"azucar",
    "quantity": 2
};

const ingredientChocolate: IIngredient = {
    "name":"chocolate",
    "quantity":5
};

const ingredientExtra: IIngredient = {
    "name":"flan",
    "quantity":5
};

const breadValues: ICake = {
    "name":"pastel imposible",
    "description":"YUUUUUUUUUUUUUUUUUM CHOCOLATE CAKE THATS THE BEST CAKE IN THE WORLD",
    "ingredients":[ingredientSugar, ingredientChocolate, ingredientExtra],
    "price":50,
    "stock":5,
    "state":"test"
};

import CakeService from "../app/cake/cake.service";
import { mock, instance, when, deepEqual } from "ts-mockito";

const mockedCakeService: CakeSchema = mock(CakeService);
const cakeService: CakeSchema = instance(mockedCakeService);

// const caleServices: BreadInjection = {
//   breadService
// };

when(mockedCakeService.save(deepEqual(breadValues))).thenResolve('some_id');

describe('Bread', () => {

  let bread: Bread;

  beforeEach(() => {
    bread = new Bread();
    return true;
  });

  describe('#save', () => {

    it('Should return an ID', async () => {
      try {
        let bread: Bread = new Bread(breadValues, breadServices);
        const id = await bread.save();
        expect(id).to.be.eq('some_id');
      } catch (error) {
        should().fail();
      }
    });

  });

  describe('#validateEmoji', () => {

    it('Should return true', () => {
      try {
        bread.emoji = '🍞';
        const result = bread.validateEmoji();
        expect(result).to.be.true;
      } catch (error) {
        should().fail();
      }
    });

    it('Should throw only 1 characters', () => {
      try {
        bread.emoji = '🍞🥖';
        bread.validateEmoji();
        should().fail();
      } catch (error) {
        expect(error.message).to.match(/.*Emoji.*only*/);
      }
    });

  });

  describe('#validateName', () => {

    it('Should return true', () => {
      try {
        bread.name = 'Birote';
        const result = bread.validateName();
        expect(result).to.be.true;
      } catch (error) {
        should().fail();
      }
    });

    it('Should throw required', () => {
      try {
        bread.validateName();
        should().fail();
      } catch (error) {
        expect(error.message).to.match(/.*Name.*empty*/);
      }
    });

    it('Should throw name too short', () => {
      try {
        bread.name = 'ab';
        bread.validateName();
        should().fail();
      } catch (error) {
        expect(error.message).to.match(/.*Name.*less*/);
      }
    });

    it('Should throw name too short', () => {
      try {
        bread.name = 'Birote'.repeat(10);
        bread.validateName();
        should().fail();
      } catch (error) {
        expect(error.message).to.match(/.*Name.*more*/);
      }
    });

  });
});