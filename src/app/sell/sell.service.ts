import { Sell } from './sell.modal';

let sales: Sell[] = [];

export const getSales = () => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(sales);
		}, sales.length * 100)
	})
};

export const makeSell = (newSell: Sell) => {
	return new Promise((resolve, rejected) => {
		setTimeout(() => {			
			const newSales = [...sales, newSell];
			resolve(newSales);
		}, 1000);
	})
}

export const updateSell = (id: number, newSellData: Sell) => {
	return new Promise((resolve, rejected) => {
		setTimeout(() => {
			const newSales = sales.map(sell => {
				if (sell.id === id) {
					return newSellData;
				};
				return sell;
			});
			resolve(newSales);
		}, 1000);
	})
}

export const deleteSell = (id: number) => {
	return new Promise((resolve, rejected) => {
		setTimeout(() => {
			const newSales = sales.filter(sell => sell.id !== id);
			sales = newSales;
			resolve(newSales);
		}, 1000);
	})
}