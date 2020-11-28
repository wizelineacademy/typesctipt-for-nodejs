import { salesMocks } from '../../utils/mocks/sales.mock';
import { Sale as SaleInterface } from "../sales/sale.interface";


export const createSale = (sale: {}) => {
    return new Promise((resolve) => {
        //console.log("from service sales:", sale);
        const newSale = sale as SaleInterface;
        salesMocks.push(newSale);
        console.log({salesMocks});
        setTimeout(() => {
            resolve(newSale);
        }, 1500);
    });
}

