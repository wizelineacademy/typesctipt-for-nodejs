import { CreateQuery } from 'mongoose'
import { ISale } from '../../types/interface/sale.interface'
import Sale from '../../types/model/sale.model'
import CakeService from '../cake/cake.service'

async function SellCake ({
    customerName,
    customerPhoneNumber,
    customerEmail,
    cakeId,
    quantity
}: CreateQuery<ISale>): Promise<ISale> {
    return Sale.create({
        customerName,
        customerPhoneNumber,
        customerEmail,
        cakeId,
        quantity
    })
    .then((data: ISale) => {
        return data;
    })
    .catch((error: Error) => {
        throw error;
    })
}

export default {
    SellCake
};