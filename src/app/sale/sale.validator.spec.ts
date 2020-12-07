
import "reflect-metadata";
import { instance, mock, reset, verify } from 'ts-mockito';
import { ValidatorHelper } from '../../component/validator/validator';
import { SaleValidator } from './sale.validator';
import { Sale } from './data/sale.model';
import { CommonRegex } from "../../component/validator/common.regex";


describe('saleValidator tests', () => {
    const mockValidator = mock(ValidatorHelper)
    const saleValidator = new SaleValidator(instance(mockValidator));
    beforeEach(() =>{
        reset(mockValidator);
    })
    describe("customerName", () =>{

        it("should check validator calls", ()=>{
            const label = "Customer name";
            const value: Partial<Sale> = {
                customerName: "test"
            };
            saleValidator.validateCustomerName(value);
            verify(mockValidator.required(value.customerName, label)).called();
            verify(mockValidator.minLength(value.customerName, 3, label)).called();
            verify(mockValidator.maxLength(value.customerName, 50, label)).called();
        })
    });

    describe("customerPhoneNumber", () =>{
        it("should check validator calls", ()=>{
            const label = "Customer phone";
            const value: Partial<Sale> = {
                customerPhoneNumber: "test"
            };
            saleValidator.validateCustomerPhone(value);
            verify(mockValidator.required(value.customerPhoneNumber, label)).called();
            verify(mockValidator.pattern(value.customerPhoneNumber, CommonRegex.phone, label)).called();
        })
    })
    describe("customerPhoneNumber", () =>{
        it("should check validator calls", ()=>{
            const label = "Customer email";
            const value: Partial<Sale> = {
                customerEmail: "test"
            };
            saleValidator.validateCustomerEmail(value);
            verify(mockValidator.required(value.customerEmail, label)).called();
            verify(mockValidator.pattern(value.customerEmail, CommonRegex.email, label)).called();
        })
    })
    describe("cakeId", () =>{
        it("should check validator calls", ()=>{
            const label = "Cake id";
            const value: Partial<Sale> = {
                cakeId: "test"
            };
            saleValidator.validateCakeId(value);
            verify(mockValidator.required(value.cakeId, label)).called();
        })
    })


});