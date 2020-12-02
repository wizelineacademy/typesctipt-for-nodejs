import express from 'express'
import { customer as customerInterface } from '../../types/interface/customer.interface'
import { sale, sale as saleClass } from '../../types/class/sale.class'
// import { cake as cakeClass } from '../../types/class/cake.class'
import { getCake } from '../cake/cake.service'

const uuidv4 = () => {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

export const makeSale = async(req: express.Request) => {
    console.log(req.body)
    console.log(req.body.cakeId)
    const cakeToSell = await getCake(req.body.cakeId)
    return new Promise<saleClass>((resolve, reject) => {
        setTimeout(() => {
            const salesCustomer: customerInterface = {
                name: req.body.customerName,
                phoneNumber: req.body.customerPhoneNumber,
                email: req.body.customerEmail
            }
            console.log(salesCustomer)
            console.log(cakeToSell)
            try{
                cakeToSell.sell(req.body.totalAmount)
            }catch{
                console.log('No enough cakes to sell');
            }
            let id = uuidv4()
            const newSale = new saleClass(id, salesCustomer, req.body.cakeId, req.body.totalAmount)
            resolve(newSale)
        }, 10);
    })
}
    