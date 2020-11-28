import { Sale } from "./sale.class";

let counter = 1;
const data: Sale[] = [];

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
export const saleService = {
    get(): Promise<Sale[]>{
        return simulate(data);
    },
    post(entity: Sale): Promise<Sale>{
        entity.id = counter++;
        data.push(entity)
        return simulate(entity);
    },
    delete(id: number): Promise<Sale[]>{
        let idx = data.findIndex(item => item.id === id); 
        if(idx === -1) return Promise.reject({code : 404, message: "Not found"})
        data.splice(idx,1);
        return simulate(data)
    },
    put(entity: Sale): Promise<Sale>{
        let idx = data.findIndex(item => item.id === entity.id); 
        if(idx === -1) return Promise.reject({code : 404, message: "Not found"})
        data[idx] = entity; 
        return simulate(entity);
    }
}
