import { expect, should } from 'chai';
import { dbMain } from '../app.database';

import { Bread, BreadInjection } from './bread.class';
import { IBread } from './bread.interface';

const breadValues: IBread = {
  name: 'Birote', emoji: '🥖'
};

import { BreadService } from "./bread.service";
import { mock, instance, when, deepEqual } from "ts-mockito";

const mockedBreadService: BreadService = mock(BreadService);
const breadService: BreadService = instance(mockedBreadService);

const breadServices: BreadInjection = {
  breadService
};

when(mockedBreadService.save(deepEqual(breadValues))).thenResolve('some_id');

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
