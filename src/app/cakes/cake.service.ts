import Cake, { ICake } from './cake.class';

const cakes: Cake[] = [];

const getCakes = async (): Promise<Cake[]> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cakes);
        }, Math.random() * 10);
    });
}

const addCake = async (model: any): Promise<Cake> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            const cake = new Cake(model);
            cakes.push(cake);
            resolve(cake);
        }, Math.random() * 10);
    });
}

const updateCake = async (id: string, model: ICake): Promise<Cake> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let cake = cakes.find(c => c.name === id);
            const i = cakes.indexOf(cake);
            cakes[i] = {...cake, ...model};
            resolve(cakes[i]);
        }, Math.random() * 10);
    });
}

const deleteCake = async (id: string): Promise<boolean> => {
    return new Promise((resolve) => {
        setTimeout(() => {
            let cake = cakes.find(c => c.name === id);
            const i = cakes.indexOf(cake);
            cakes.splice(i, 1);
            resolve(i !== -1);
        }, Math.random() * 10);
    });
}

export {
    getCakes,
    addCake,
    updateCake,
    deleteCake,
}