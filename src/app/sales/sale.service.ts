import Sale, { ISale } from './sale.class';

const sales: Sale[] = [];

const getSales = async (): Promise<Sale[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(sales);
        }, Math.random() * 10);
    });
}

const addSale = async (model: any): Promise<Sale> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const sale = new Sale(model);
            sales.push(sale);
            resolve(sale);
        }, Math.random() * 10);
    });
}

const updateSale = async (id: string, model: ISale): Promise<Sale> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let sale = sales.find(c => c.customerEmail === id);
            const i = sales.indexOf(sale);
            sales[i] = {...sale, ...model};
            resolve(sales[i]);
        }, Math.random() * 10);
    });
}

const deleteSale = async (id: string): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let sale = sales.find(c => c.customerEmail === id);
            const i = sales.indexOf(sale);
            sales.splice(i, 1);
            resolve(i !== -1);
        }, Math.random() * 10);
    });
}

export {
    getSales,
    addSale,
    updateSale,
    deleteSale,
}