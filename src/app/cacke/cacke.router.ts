import express, { Router }  from 'express';

class CackeController {

    public router: Router;

    constructor () {
        this.router = express.Router();
        this.defineRouter();
    }

    private defineRouter() {
        this.router.post('/cackes', async(req, res)=>{
            res.status(201).send("Test post");
        });
        this.router.get('/cackes', async(req, res)=>{
            res.status(201).send("Test get");
        });
        this.router.get('/cackes/:id', async(req, res)=>{
            res.status(201).send("Test get by id");
        });
        this.router.patch('/cackes/:id', async(req, res)=>{
            res.status(201).send("Test patch by id");
        });
        this.router.delete('/cackes/:id', async(req, res)=>{
            res.status(201).send("Test delete by id");
        });
    }
}

export default CackeController;