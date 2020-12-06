
import "reflect-metadata";
import { expect } from 'chai';
import { instance, mock, reset, verify } from 'ts-mockito';
import { ValidatorHelper } from '../../component/validator/validator';
import { CakeValidator } from './cake.validator';
import { CakeStatus } from './data/cake-status.enum';
import { Cake } from './data/cake.model';


describe('CakeValidator tests', () => {
    const mockValidator = mock(ValidatorHelper)
    const cakeValidator = new CakeValidator(instance(mockValidator));
    beforeEach(() =>{
        reset(mockValidator);
    })
    describe("name", () =>{

        it("should check validator calls", ()=>{
            const label = "Name";
            const value: Partial<Cake> = {
                name: "test"
            };
            cakeValidator.validateName(value);
            verify(mockValidator.required(value.name, label)).called();
            verify(mockValidator.minLength(value.name, 5, label)).called();
            verify(mockValidator.maxLength(value.name, 50, label)).called();
        })
    });

    describe("description", () =>{
        it("should check validator calls", ()=>{
            const label = "Description";
            const value: Partial<Cake> = {
                description: "test"
            };
            cakeValidator.validateDescription(value);
            verify(mockValidator.required(value.description, label)).called();
            verify(mockValidator.minLength(value.description, 50, label)).called();
            verify(mockValidator.maxLength(value.description, 100, label)).called();
        })
    })

    describe("ingredients", () =>{
        it("should check validator calls", ()=>{
            const label = "Ingredients";
            const value: Partial<Cake> = {
                ingredients: ["1"]
            };
            cakeValidator.validateIngredients(value);
            verify(mockValidator.required(value.ingredients, label)).called();
            verify(mockValidator.minArrayLength(value.ingredients, 3, label)).called();
        })
    })
    describe("price", () =>{
        it("should check validator calls", ()=>{
            const label = "Price";
            const value: Partial<Cake> = {
                price: 100
            };
            cakeValidator.validatePrice(value);
            verify(mockValidator.required(value.price, label)).called();
            verify(mockValidator.min(value.price, 1, label)).called();
        })
    })
    describe("stock", () =>{
        it("should check validator calls", ()=>{
            const label = "Stock";
            const value: Partial<Cake> = {
                stock: 100
            };
            cakeValidator.validateStock(value);
            verify(mockValidator.required(value.stock, label)).called();
            verify(mockValidator.min(value.stock, 0, label)).called();
        })
    })
   

    describe("status", () =>{
        it("should change to Available when stock == 11", ()=>{
            let cake = {
                stock: 11
            } as Cake;
            cakeValidator.validateStatus(cake)
            expect(cake.status).to.be.eq(CakeStatus.Available);

        })
        it("should change to Available when stock > 11", ()=>{
            let cake = {
                stock: Number.MAX_VALUE
            } as Cake;
            cakeValidator.validateStatus(cake)
            expect(cake.status).to.be.eq(CakeStatus.Available);

        })
        it("should change to LastUnits when stock == 10", ()=>{
            let cake = {
                stock: 10
            } as Cake;
            cakeValidator.validateStatus(cake)
            expect(cake.status).to.be.eq(CakeStatus.LastUnits);
        })
        it("should change to LastUnits when stock == 1", ()=>{
            let cake = {
                stock: 1
            } as Cake;
            cakeValidator.validateStatus(cake)
            expect(cake.status).to.be.eq(CakeStatus.LastUnits);
        })
        it("should change to OutOfStock when stock == 0", ()=>{
            let cake = {
                stock: 0
            } as Cake;
            cakeValidator.validateStatus(cake)
            expect(cake.status).to.be.eq(CakeStatus.OutOfStock);
        })
    });
});