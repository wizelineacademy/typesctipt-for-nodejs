import * as express from 'express'
import CakeService from '../cake.service'

export const idPatchHandler = async(req: express.Request, res: express.Response) => {
    const cake = await CakeService.EditCake(req.params.id,{
        name: req.body.name,
        description: req.body.description,
        ingredients: req.body.ingredients,
        price: req.body.price,
        stock: req.body.stock
    }).then((data) => {
        console.log(data)
        res.status(200).send("{\"message\":\"success\"}")
    }).catch((error) => {
        console.log(error)
        res.status(500).send("{\"message\":\"error\"}")
    })
}
