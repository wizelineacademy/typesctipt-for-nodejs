
import { Router } from "express";


export const router = Router();

router.route("/").get((req,res) =>{
    res.send(200);
})