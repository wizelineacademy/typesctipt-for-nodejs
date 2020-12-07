import { expect } from 'chai';
import { anything } from 'ts-mockito';
import { BadRequestException } from '../http-exceptions';
import {ValidatorHelper} from './validator';

describe("Validator",() =>{
    const validator = new ValidatorHelper();
    describe("minLength", () =>{
        it("should check min rule", ()=>{
            const value = '*'.repeat(4);
            const length = 5;
            const label = "test";
            expect(() =>{
                validator.minLength(value,length,label)
            }).to.throw(BadRequestException);
        })

        it("should display a proper error message", ()=>{
            const value = '*'.repeat(4);
            const length = 5;
            const label = "test";
            expect(() =>{
                validator.minLength(value,length,label)
            }).to.throw(`${label} length should at least ${length} characters long`);
        })

        it("should accept correct value", ()=>{
            const value = '*'.repeat(5);
            const length = 5;
            const label = "test";
            // absence of exception means it is correct
            validator.minLength(value,length,label)
        })
        it("should not accept 0 minLength values ", ()=>{
            const value = '*';
            const length = 0;
            const label = "test";
            // absence of exception means it is correct
            expect(() =>{
                validator.minLength(value,length,label)
            }).to.throw(Error);
        })
        it("should not accept negative minLength values ", ()=>{
            const value = '*';
            const length = -1;
            const label = "test";
            // absence of exception means it is correct
            expect(() =>{
                validator.minLength(value,length,label)
            }).to.throw(Error);
        })
        it("should skip empty values", ()=>{
            const value = undefined;
            const length = 5;
            const label = "test";
            // absence of exception means it is correct
            validator.minLength(value,length,label)
        })
    });

    describe("maxLength", () =>{
        it("should check max rule", ()=>{
            const value = '*'.repeat(6);
            const length = 5;
            const label = "test";
            expect(() =>{
                validator.maxLength(value,length,label)
            }).to.throw(BadRequestException);
        })

        it("should display a proper error message", ()=>{
            const value = '*'.repeat(6);
            const length = 5;
            const label = "test";
            expect(() =>{
                validator.maxLength(value,length,label)
            }).to.throw(`${label} maximun length is ${length} characters`);
        })

        it("should accept correct value", ()=>{
            const value = '*'.repeat(5);
            const length = 5;
            const label = "test";
            // absence of exception means it is correct
            validator.maxLength(value,length,label)
        })
        it("should not accept 0 minLength values ", ()=>{
            const value = '*';
            const length = 0;
            const label = "test";
            // absence of exception means it is correct
            expect(() =>{
                validator.maxLength(value,length,label)
            }).to.throw(Error);
        })
        it("should not accept negative minLength values ", ()=>{
            const value = '*';
            const length = -1;
            const label = "test";
            // absence of exception means it is correct
            expect(() =>{
                validator.maxLength(value,length,label)
            }).to.throw(Error);
        })
        it("should skip empty values", ()=>{
            const value = undefined;
            const length = 5;
            const label = "test";
            // absence of exception means it is correct
            validator.maxLength(value,length,label)
        })

        
    });
    describe("min", ()=>{
        it("should check min rule", ()=>{
            const value = 4;
            const minValue = 5;
            const label = "test";
            expect(() =>{
                validator.min(value,minValue,label)
            }).to.throw(BadRequestException);
        })

        it("should display a proper error message", ()=>{
            const value = 4;
            const minValue = 5;
            const label = "test";
            expect(() =>{
                validator.min(value,minValue,label)
            }).to.throw(`${label} must be greter than ${minValue}`);
        })

        it("should accept correct value", ()=>{
            const value = 5;
            const minValue = 5;
            const label = "test";
            // absence of exception means it is correct
            validator.min(value,minValue,label)
        })
        it("should skip empty values", ()=>{
            const value = undefined;
            const minValue = 5;
            const label = "test";
            // absence of exception means it is correct
            validator.min(value,minValue,label)
        })

    })

    describe("pattern", ()=>{
        it("should check pattern rule", ()=>{
            const value = 'bbb';
            const pattern = {label: "dummy", regex: /aaa/};
            const label = "test";
            expect(() =>{
                validator.pattern(value,pattern,label)
            }).to.throw(BadRequestException);
        })

        it("should check pattern rule - 2", ()=>{
            const value = 'xxx';
            const pattern = {label: "dummy", regex: /asd/};
            const label = "test";
            expect(() =>{
                validator.pattern(value,pattern,label)
            }).to.throw(BadRequestException);
        })

        it("should display proper error message", ()=>{
            const value = 'Hello :D';
            const pattern = {label: "dummy", regex: /dummy/};
            const label = "test";
            expect(() =>{
                validator.pattern(value,pattern,label)
            }).to.throw(`${label} is not valid dummy`);
        })
        it("should accept empty values", ()=>{
            const value = undefined;
            const pattern = {label: "dummy", regex: /aaa/};
            const label = "test";
            validator.pattern(value,pattern,label)
        })
    })

    describe("minArrayLength", () =>{
        it("should check min rule", ()=>{
            const value = [1,2];
            const length = 3;
            const label = "test";
            expect(() =>{
                validator.minArrayLength(value,length,label)
            }).to.throw(BadRequestException);
        })

        it("should display a proper error message", ()=>{
            const value = [1,2];
            const length = 3;
            const label = "test";
            expect(() =>{
                validator.minArrayLength(value,length,label)
            }).to.throw(`${label} must be have at least ${length} items`);
        })

        it("should accept correct value", ()=>{
            const value = [1,2,3];
            const length = 3;
            const label = "test";
            // absence of exception means it is correct
            validator.minArrayLength(value,length,label)
        })
        it("should not accept 0 minLength values ", ()=>{
            const value = [1,2,3];
            const length = 0;
            const label = "test";
            // absence of exception means it is correct
            expect(() =>{
                validator.minArrayLength(value,length,label)
            }).to.throw(Error);
        })
        it("should not accept negative minLength values ", ()=>{
            const value = [1,2,3];
            const length = -1;
            const label = "test";
            // absence of exception means it is correct
            expect(() =>{
                validator.minArrayLength(value,length,label)
            }).to.throw(Error);
        })
        it("should skip empty values", ()=>{
            const value = undefined;
            const length = 5;
            const label = "test";
            // absence of exception means it is correct
            validator.minArrayLength(value,length,label)
        })
    });
})