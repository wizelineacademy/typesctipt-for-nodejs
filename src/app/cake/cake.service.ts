import { Cake } from './cake.model';

let cakes: Cake[] = [];

export const getCakes = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(cakes);
		}, cakes.length * 100)
	})
};

export const makeCake = (quantity: number, newCake: Cake) => {
	return new Promise((resolve, rejected) => {
		setTimeout(() => {
			const newCakes = new Array(quantity).fill(newCake);
			cakes = [...cakes, ...newCakes];
			resolve(cakes);
		}, quantity * 100)
	})
}

export const updateCake = (id: number, newCakeData: Cake) => {
	return new Promise((resolve, rejected) => {
		setTimeout(() => {
			const newCakes = cakes.map(cake => {
				if (cake.id === id) {
					return newCakeData;
				};
				return cake;
			});
			resolve(newCakes);
		}, 1000);
	})
}

export const deleteCake = (id: number) => {
	return new Promise((resolve, rejected) => {
		setTimeout(() => {
			const newCakes = cakes.filter(cake => cake.id !== id);
			cakes = newCakes;
			resolve(cakes);
		}, 1000);
	})
}