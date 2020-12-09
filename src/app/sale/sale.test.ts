import { expect, should } from 'chai';
import { mock, instance, when, deepEqual } from 'ts-mockito';

import { Sale, SaleInjection } from './sale.class';
import { SaleService } from './sale.service';
import { ISale } from './sale.interface';

const mockedSaleService: SaleService = mock(SaleService);
const saleService: SaleService = instance(mockedSaleService);

const saleServices: SaleInjection = { saleService };

const saleValues: ISale = {
    customerName: 'German Sandoval',
    customerEmail: 'german.sandoval.ie@gmail.com',
    customerPhoneNumber: '3320203406',
    totalAmount: 5,
    cakeId: '5fcc75b4fade294c40834717'
};

describe('Sale', () => {
    let sale: Sale;

    beforeEach(() => {
        sale = new Sale(saleValues);
    });

    describe('#validateCustomerName', () => {
        it('should return true', () => {
            try {
                expect(sale.validateCustomerName()).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('should throw an range error', () => {
            try {
                sale.customerName = 'a';
                sale.validateCustomerName();
                
                should().fail();
            } catch (error) {
                expect(error.message).to.match(/.should be in range/);
            }
        });
    });

    describe('#validateCustomerEmail', () => {
        it('should return true', () => {
            try {
                expect(sale.validateCustomerEmail()).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('should throw a non valid email error', () => {
            try {
                sale.customerEmail = 'not an email';
                sale.validateCustomerEmail();

                should().fail();
            } catch (error) {
                expect(error.message).to.match(/. is not a valid email/);
            }
        });
    });

    describe('#validateCustomerPhoneNumber', () => {
        it('should return true', () => {
            try {
                expect(sale.validateCustomerPhoneNumber()).to.be.true;
            } catch (error) {
                should().fail();
            }
        });

        it('should throw a non valid phone number error', () => {
            try {
                sale.customerPhoneNumber = 'not a number';
                sale.validateCustomerPhoneNumber();

                should().fail();
            } catch (error) {
                expect(error.message).to.match(/. is not a valid phone number/)
            }
        });
    });
})