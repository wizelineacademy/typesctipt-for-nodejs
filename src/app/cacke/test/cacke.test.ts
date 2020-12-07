import { mock, instance, when } from "ts-mockito";

import { CackeService } from '../cacke.service';
import { Cacke } from '../cacke.class';
import { expect, should } from 'chai';
import { itemSold } from "../../sell/test/mock.sell";
import { listCacke, outOfStockcacke, avaliableCacke } from "./mock.cacke";

const mockCackeService: CackeService = mock(CackeService);
const cackeService: CackeService = instance(mockCackeService);

when(mockCackeService.getAllCakes()).thenResolve(listCacke);
when(mockCackeService.getCacke("1")).thenResolve(outOfStockcacke);
when(mockCackeService.save(avaliableCacke)).thenResolve("1");
when(mockCackeService.edit("1", avaliableCacke)).thenResolve();
when(mockCackeService.isCackeAvaliableForSale(itemSold)).thenResolve(true);
when(mockCackeService.isCackeAvaliableForSale(null)).thenResolve(false);

describe('Cacke', () => {
    
    describe('#Get', () => {
    it('Should return a list of all the cackes', async () => {
        try {
           let cackes = await cackeService.getAllCakes();
           expect(cackes).to.be.not.empty;
        } catch (error) {
          should().fail();
        }
      });

      it('Should return a single cacke', async () => {
          try {
            let cacke = await cackeService.getCacke("1");
            expect(cacke.name).to.be.eq("King Cacke");
          } catch(e) {
            should().fail();
          }
      });

      it('Should not sell a cacke with a quantity greater than the current stock', async ()=>{
        try {
          let response = await cackeService.isCackeAvaliableForSale(itemSold);
          expect(response).to.be.true;
        } catch(error) {
          should().fail();
        }
      });
    });

    describe("#Post", ()=> {
      it('Should save a new cacke entry', async () => {
        try {
          let response = await cackeService.save(avaliableCacke);
           expect(response).to.be.equals("1");
        } catch (error) {
          should().fail();
        }
      });
    });

    describe("#Patch", ()=> {
      it('Should update the cacke', async () => {
        try {
          let response = await cackeService.edit("1", avaliableCacke);
           expect(response).not.to.be.null;
        } catch (error) {
          should().fail();
        }
      });
    });

    describe("#Logic", () => {
      it('Should return avaliable if the stock is greater than 10', () => {
        try {
          let response = Cacke.getNewCackeStatus(11);
          expect(response).to.be.equals("Avaliable");

        } catch (error) {
          should().fail();
        }
      });

      it('Should return last units if the stock is between 10 and 0', () => {
        try {
          let response = Cacke.getNewCackeStatus(6);
          expect(response).to.be.equals("LastUnits");

        } catch (error) {
          should().fail();
        }
      });
      it('Should return out of stock if the stock is between 0', () => {
        try {
          let response = Cacke.getNewCackeStatus(0);
          expect(response).to.be.equals("OutOfStock");
        } catch (error) {
          should().fail();
        }
      });
    });
});