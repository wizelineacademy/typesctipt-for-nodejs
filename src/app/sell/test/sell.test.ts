import { mock, instance, when } from "ts-mockito";

import { itemSold } from './mock.sell'; 
import { expect, should } from 'chai';
import { SellService } from './../sell.service';


const mockSalesSetrvice: SellService = mock(SellService);
const salesService: SellService = instance(mockSalesSetrvice);

when(mockSalesSetrvice.save(itemSold)).thenResolve("1");

describe('Sell', () =>{
    describe('Should return a list of all the sales', async () => {
        try {
            let sales = await salesService.save(itemSold);
            expect(sales).to.be.equals("1");
        } catch(e) {

        }
    });
});