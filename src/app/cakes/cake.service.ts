import { cakesMocks } from '../../utils/mocks/cakes.mock';
import { Cake as CakeInterface } from "../cakes/cake.interface";

export const getAllCakes = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cakesMocks);
        }, 1500);
    });
}

export const getCake = (id: number) => {
    return new Promise((resolve) => {
        const cakeSelected = cakesMocks.filter(cake => cake._id == id);
        console.log("selected:", cakeSelected);
        setTimeout(() => {
            resolve(cakeSelected);
        }, 1500);
    })
}

export const createCake = (cake: {}) => {
    return new Promise((resolve) => {
        console.log("from service:", cake);
        const newCake = cake as CakeInterface;
        cakesMocks.push(newCake);
        setTimeout(() => {
            resolve(newCake);
        }, 1500);
        
    })
}

export const updateCake = (id: number, cake: {}) => {
    return new Promise((resolve) => {
        console.log("from service:", cake);
        const cakeSelected = cakesMocks.filter(cake => cake._id == id)[0];
        const cakeUpdate = cake as CakeInterface;
        const cakeReturned = Object.assign(cakeSelected, cakeUpdate);
        setTimeout(() => {
            resolve(cakeReturned);
        }, 1500);
    })
}
