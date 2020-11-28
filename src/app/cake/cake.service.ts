import { Cake } from "./cake.class";

let counter = 1;
const data: Cake[] = [];

/**
 * Simulate a slow db connection based on the number of items in the list
 * @param val
 */
function simulate<T>(val: T){
    return new Promise<T>((resolve)=>{
        setTimeout(()=>{
            resolve(val);
        }, data.length * 100);
    });
}
export const cakeService = {
    get(): Promise<Cake[]>{
        return simulate(data);
    },
    post(entity: Cake): Promise<Cake>{
        entity.id = counter++;
        data.push(entity)
        return simulate(entity);
    },
    delete(id: number): Promise<Cake[]>{
        let idx = data.findIndex(item => item.id === id); 
        if(idx === -1) return Promise.reject({code : 404, message: "Not found"})
        data.splice(idx,1);
        return simulate(data)
    },
    put(entity: Cake): Promise<Cake>{
        console.log("🚀 ~ file: cake.service.ts ~ line 34 ~ put ~ entity.id)", entity.id, entity.id === 1);
        let idx = data.findIndex(item => item.id === entity.id); 
        if(idx === -1) return Promise.reject({code : 404, message: "Not found"})
        data[idx] = entity; 
        return simulate(entity);
    }
}
