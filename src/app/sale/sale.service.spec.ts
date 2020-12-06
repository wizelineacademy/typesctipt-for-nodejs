


import "reflect-metadata";
import { mock,verify,reset ,instance} from 'ts-mockito';
import { SaleValidator } from './sale.validator';
import { Sale } from './data/sale.model';
import { SaleService } from './sale.service';
import { CakeService } from '../cake/cake.service';
import { DataService } from "../../component/data.service";


describe('CakeService tests', () => {
    let mockValidator= mock(SaleValidator); 
    let mockCakeService= mock(CakeService); 
    let mockDataService = mock(DataService);
    let service = new SaleService(instance(mockValidator),instance(mockDataService),instance(mockCakeService));
    beforeEach(() =>{
        reset(mockValidator);
        reset(mockDataService);
        reset(mockCakeService);
    })

    describe("sale", () =>{
        it("should execute entity validation", async ()=>{
            const entity = {cakeId: "dummyCakeId"} as Sale;
            await service.sale(entity);
            verify(mockValidator.execute(entity)).called();
        });      
        it("should adjust cake stock", async ()=>{
            const entity = {cakeId: "dummyCakeId", totalAmount: 9999} as Sale;
            await service.sale(entity);
            verify(mockCakeService.adjustCakeStock(entity.cakeId,entity.totalAmount)).called();
        });      
        it("should insert", async ()=>{
            const entity = {cakeId: "dummyCakeId", totalAmount: 9999} as Sale;
            await service.sale(entity);
            verify(mockDataService.insert(entity)).called();
        });          
    })

});