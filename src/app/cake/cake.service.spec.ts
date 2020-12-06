


import "reflect-metadata";
import { expect } from 'chai';
import { mock,verify,reset, when, anything ,instance, capture} from 'ts-mockito';
import { CakeValidator } from './cake.validator';
import { Cake } from './data/cake.model';
import { CakeService } from './cake.service';
import { DataService } from "../../component/data.service";
import { BadRequestException } from "../../component/http-exceptions";


describe('CakeService tests', () => {
    let mockValidator= mock(CakeValidator); 
    let mockDataService = mock(DataService);
    let service = new CakeService(instance(mockValidator),instance(mockDataService));
    beforeEach(() =>{
        reset(mockValidator);
        reset(mockDataService);
    })
    describe("post", () =>{
        it("should execute entity validation", async ()=>{
            const entity = {name: "name"} as Cake;
            await service.post(entity);
            verify(mockValidator.execute(entity)).called();
        });      
        it("should call dataService insert", async ()=>{
            const entity = {name: "name"} as Cake;
            await service.post(entity);
            verify(mockDataService.insert(entity)).called();
        }); 
        it("should propagate entity validation error",()=>{
            const entity = {name: "name"} as Cake;
            when(mockValidator.execute(entity)).thenThrow(new BadRequestException('tested'));
            expect(() =>{
                service.post(entity);
            }).to.throw("tested")
            verify(mockDataService.insert(entity)).never();
        });        
    })

    describe("get", () =>{ 
        it("should call dataService fetchMany", async ()=>{
            await service.get();
            verify(mockDataService.fetchMany()).called();
        });     
    })
    describe("getById", () =>{ 
        it("should call dataService fetchOne", async ()=>{
            await service.getById("1");
            verify(mockDataService.fetchOne("1")).called();
        });
        it("should propagate dataService error",()=>{
            const entity = {name: "name"} as Cake;
            when(mockDataService.fetchOne("1")).thenThrow(new BadRequestException('tested'));
            expect(() =>{
                service.getById("1");
            }).to.throw("tested")
            verify(mockDataService.fetchOne("1")).called();
        });     
    })
    describe("delete", () =>{ 
        it("should call dataService delete", async ()=>{
            await service.delete("1");
            verify(mockDataService.delete("1")).called();
        });  
        it("should propagate dataService error",()=>{
            const entity = {name: "name"} as Cake;
            when(mockDataService.delete("1")).thenThrow(new BadRequestException('tested'));
            expect(() =>{
                service.delete("1");
            }).to.throw("tested")
            verify(mockDataService.delete("1")).called();
        });      
    })
    describe("put", () =>{ 
        it("should throw not found when value doesn't exist", async ()=>{
            const entity = {name: "name"} as Cake;
            when(mockDataService.fetchOne("1")).thenResolve(undefined);
            try{
                await service.put("1", entity)
                expect('should throw error').to.be.eq('but it didnt')
            }catch(e){
                expect(e.message).to.be.eq("Not found")
            }
        });  

        it("should merge entity param with db value", async ()=>{
            const entity = {name: "name"} as Cake;
            when(mockDataService.fetchOne("1")).thenResolve({description: "desc"});

            
            await service.put("1", entity)
            const [merged] = capture(mockValidator.execute).last();
            expect(merged.description).to.be.eq("desc")
            expect(merged.name).to.be.eq("name")
        });  

        it("should merge entity param with db value", async ()=>{
            const entity = {name: "name"} as Cake;
            when(mockDataService.fetchOne("1")).thenResolve({description: "desc"});

            
            await service.put("1", entity)
            const [merged] = capture(mockValidator.execute).last();
            verify(mockDataService.update("1",merged)).called()
        });
    })
})