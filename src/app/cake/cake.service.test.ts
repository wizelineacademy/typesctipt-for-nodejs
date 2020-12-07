import { expect } from 'chai';

import { CakeService } from './cake.service';
import { Status } from './status.enum';

describe('CakeService', () => {
  let cakeService: CakeService;

  beforeEach(() => {
    cakeService = new CakeService();
    return true;
  });

  describe('Get current status', () => {
    it('Should return Available', () => {
      const status = cakeService.getCurrentStatus(20);
      expect(status).equal(Status.Available);
    });

    it('Should return OutOfStock', () => {
      const status = cakeService.getCurrentStatus(0);
      expect(status).equal(Status.OutOfStock);
    });

    it('Should return LastUnits', () => {
      const status = cakeService.getCurrentStatus(5);
      expect(status).equal(Status.LastUnits);
    });
  });

  describe('Validate name', () => {
    it('Should accept a name with correct length', () => {
      const result = cakeService.isValidName('1234567');
      expect(result).to.be.true;
    });

    it('Should reject a name with short length', () => {
      const result = cakeService.isValidName('1');
      expect(result).to.be.false;
    });

    it('Should reject a name with long length', () => {
      const result = cakeService.isValidName(
        '123456789012345678901234567890123456789013245678901234567890'
      );
      expect(result).to.be.false;
    });
  });

  describe('Validate description', () => {
    it('Should accept a description with correct length', () => {
      const result = cakeService.isValidDescription(
        '123456789012345678901234567890123456789013245678901234567890'
      );
      expect(result).to.be.true;
    });

    it('Should reject a description with short length', () => {
      const result = cakeService.isValidDescription('1');
      expect(result).to.be.false;
    });
  });

  describe('Validate ingredients', () => {
    it('Should accept a list of 3 ingredients', () => {
      const result = cakeService.isValidIngredients(['one', 'two', 'three']);
      expect(result).to.be.true;
    });

    it('Should reject a list of less than 3 ingredients', () => {
      const result = cakeService.isValidIngredients(['one', 'two']);
      expect(result).to.be.false;
    });
  });

  describe('Validate price', () => {
    it('Should accept a price bigger than 1', () => {
      const result = cakeService.isValidPrice(2);
      expect(result).to.be.true;
    });

    it('Should reject a price smaller to 1', () => {
      const result = cakeService.isValidPrice(0);
      expect(result).to.be.false;
    });
  });

  describe('Validate quantity', () => {
    it('Should accept a quantity bigger than 0', () => {
      const result = cakeService.isValidQuantity(1);
      expect(result).to.be.true;
    });

    it('Should reject a quantity smaller to 0', () => {
      const result = cakeService.isValidQuantity(-1);
      expect(result).to.be.false;
    });
  });
});
