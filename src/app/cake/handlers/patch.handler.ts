import * as express from 'express'
import { getCake, editCake } from '../cake.service'

export const idPatchHandler = async(req: express.Request, res: express.Response) => {
    let cakeToEdit = await getCake(req.params.id)
    console.log(cakeToEdit);
    
    editCake(cakeToEdit, req.body)
    res.json("Edit this cake")
}
