import { mock, instance, when } from "ts-mockito";
import { CakeService } from '../cake.service';
import { Cake } from '../cake.class';
import { expect, should } from 'chai';
import { itemSold } from "../../sell/test/mock.sell";
import { listCake, outOfStockcake, avaliableCake } from "./mock.cake";

const mockCakeService: CakeService = mock(CakeService);
const cakeService: CakeService = instance(mockCakeService);

when(mockCakeService.getAllCakes()).thenResolve(listCake);
when(mockCakeService.getCake("1")).thenResolve(outOfStockcake);
when(mockCakeService.save(avaliableCake)).thenResolve("1");
when(mockCakeService.edit("1", avaliableCake)).thenResolve();
when(mockCakeService.isCakeAvaliableForSale(itemSold)).thenResolve(true);
when(mockCakeService.isCakeAvaliableForSale(null)).thenResolve(false);

describe('Cake', () => {
    
    describe('#Get', () => {
    it('Should return a list of all the cakes', async () => {
        try {
           let cakes = await cakeService.getAllCakes();
           expect(cakes).to.be.not.empty;
        } catch (error) {
          should().fail();
        }
      });

      it('Should return a single cacke', async () => {
          try {
            let cacke = await cakeService.getCake("1");
            expect(cacke.name).to.be.eq("King Cake");
          } catch(e) {
            should().fail();
          }
      });

      it('Should not sell a cake with a quantity greater than the current stock', async ()=>{
        try {
          let response = await cakeService.isCakeAvaliableForSale(itemSold);
          expect(response).to.be.true;
        } catch(error) {
          should().fail();
        }
      });
    });

    describe("#Post", ()=> {
      it('Should save a new cacke entry', async () => {
        try {
          let response = await cakeService.save(avaliableCake);
           expect(response).to.be.equals("1");
        } catch (error) {
          should().fail();
        }
      });
    });

    describe("#Patch", ()=> {
      it('Should update the cacke', async () => {
        try {
          let response = await cakeService.edit("1", avaliableCake);
           expect(response).not.to.be.null;
        } catch (error) {
          should().fail();
        }
      });
    });

    describe("#Logic", () => {
      it('Should return avaliable if the stock is greater than 10', () => {
        try {
          let response = Cake.getNewCakeStatus(11);
          expect(response).to.be.equals("Avaliable");

        } catch (error) {
          should().fail();
        }
      });

      it('Should return last units if the stock is between 10 and 0', () => {
        try {
          let response = Cake.getNewCakeStatus(6);
          expect(response).to.be.equals("LastUnits");

        } catch (error) {
          should().fail();
        }
      });
      it('Should return out of stock if the stock is between 0', () => {
        try {
          let response = Cake.getNewCakeStatus(0);
          expect(response).to.be.equals("OutOfStock");
        } catch (error) {
          should().fail();
        }
      });
    });
});