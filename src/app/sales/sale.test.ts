import { expect, should } from 'chai'
import { db as dbMain } from '../app.database'

import { SaleInjection, Sale } from './sale.class'
import { ISale } from './sale.interface';

import { mock, instance, when, deepEqual } from "ts-mockito";
import { SaleService } from './sale.service';


const saleValues: ISale = {
    customerName: 'John Appleseed',
    customerEmail: 'john@email.com',
    customerPhoneNumber: '5512345678',
    totalAmount: 200,
    cakeId: "id1234567890",
    quantity: 100
};



const mockedSaleService: SaleService = mock(SaleService);
const saleService: SaleService = instance(mockedSaleService);

const saleServices: SaleInjection = {
    saleService
};

when(mockedSaleService.save(deepEqual(saleValues))).thenResolve(saleValues);

describe('Sale', () => {

    let sale: Sale;

    beforeEach(() => {
        sale = new Sale();
        return true;
    });

    describe('#save', () => {

        /* await this.validateCakeId()
        await this.validateStock()
        this.validateCustomerName()
        this.validateEmail()
        this.validatePhone()
        this.validateQuantity() */


        it('Should return a sale', async () => {
            try {
                const sale: Sale = new Sale(saleValues, saleServices);
                const result = await sale.save();
                expect(result).to.be.eq(saleValues)
            } catch (error) {
                should().fail();
            }
        });




    });


    describe('#validateCustomerName', () => {

        it('Should return true', () => {
            try {
                sale.customerName = 'John Appleseed';
                const result = sale.validateCustomerName();
                expect(result).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('Should throw required', () => {
            try {
                sale.validateCustomerName();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Customer.*name.*empty*/);
            }
        });

        it('Should throw customer name too short', () => {
            try {
                sale.customerName = 'Jo';
                sale.validateCustomerName();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Customer.*name.*less*/);
            }
        });

        it('Should throw customer name too long', () => {
            try {
                sale.customerName = 'John Appleseed'.repeat(10);
                sale.validateCustomerName();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Customer.*name.*more*/);
            }
        });

    });

    describe('#validateEmail', () => {

        it('Should return true', () => {
            try {
                sale.customerEmail = 'john@email.com';
                const result = sale.validateEmail();
                expect(result).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('Should throw required', () => {
            try {
                sale.validateEmail();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Customer.*email.*empty*/);
            }
        });

        it('Should throw email too short', () => {
            try {
                sale.customerEmail = 'j@e';
                sale.validateEmail();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Customer.*email.*less*/);
            }
        });

        it('Should throw email too long', () => {
            try {
                sale.customerEmail = 'john@email.com'.repeat(100);
                sale.validateEmail();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Customer.*email.*more*/);
            }
        });

    });

    describe('#validateQuantity', () => {

        it('Should return true', () => {
            try {
                sale.quantity = 1;
                const result = sale.validateQuantity();
                expect(result).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('Should throw required', () => {
            try {
                sale.validateQuantity();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Quantity.*cannot.*empty*/);
            }
        });

        it('Should throw invalid quantity', () => {
            try {
                sale.quantity = 0;
                sale.validateQuantity();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Quantity.*must.*more*/);
            }
        });
    });


    describe('#validatePhone', () => {

        it('Should return true', () => {
            try {
                sale.customerPhoneNumber = '1234567890';
                const result = sale.validatePhone();
                expect(result).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('Should throw required', () => {
            try {
                sale.validatePhone();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/Phone.*number.*empty*/);
            }
        });

        it('Should throw invalid phone number', () => {
            try {
                sale.customerPhoneNumber = '000';
                sale.validatePhone();
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.*Phone.*number.*more.*digits*/);
            }
        });
    });




});
