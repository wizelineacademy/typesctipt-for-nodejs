import { expect, should } from 'chai';
import { mock, instance, when, deepEqual } from 'ts-mockito';

import { Sale, SaleInjection } from './sale.class';
import { ISale } from './sale.interface';
import { SaleService } from "./sale.service";


const saleValues: ISale = {
    customerName: "Velkan",
    customerPhoneNumber: "+524921611742",
    customerEmail: "velkangael@xgmail.com",
    quality: 1,
    cakeId: "5fcb0a61fb8ae952c8ac3b6b"
}

const saleMirror: ISale = {
    customerName: "Velkan",
    customerPhoneNumber: "+524921611742",
    customerEmail: "velkangael@xgmail.com",
    totalAmount: 19.99,
    cakeId: "5fcb0a61fb8ae952c8ac3b6b"
}

const mockedSaleService: SaleService = mock(SaleService);
const saleService: SaleService = instance(mockedSaleService);

const sakeServices: SaleInjection = {
    saleService
};

when(mockedSaleService.registerSale(deepEqual(saleMirror))).thenResolve('some_sale_id');

describe('Sale Unit Testing', () => {

    let sale: Sale;
    
    beforeEach(() => {
        sale = new Sale();
        return true;
    });

    describe('#Register a new Sale', () => {
        it('Should return an ID', async () => {
            try{
                let sale: Sale = new Sale(saleValues, sakeServices);
                const id = await sale.save();
                expect(id).to.be.eq('some_sale_id');
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Name Customer validation', () => {
        it('Should return true', () => {
            try{
                sale.customerName = 'Gael';
                const evaluation = sale.validateCustomerName();
                expect(evaluation).to.be.true; 
            }catch(error){
                should().fail(error.message);
            }
        });
    });


    describe('#Phone Customer validation', () => {
        it('Should return true', () => {
            try{
                sale.customerPhoneNumber = '+52 492 161 1742';
                const evaluation = sale.validateCustomerPhoneNumber();
                expect(evaluation).to.be.true; 
            }catch(error){
                should().fail(error.message);
            }
        });
    });

    describe('#Email Customer validation', () => {
        it('Should return true', () => {
            try{
                sale.customerEmail = 'gael@gmail.com';
                const evaluation = sale.validateCustomerEmail();
                expect(evaluation).to.be.true; 
            }catch(error){
                should().fail(error.message);
            }
        });
    });

});
