import { Router } from 'express';

export const router: Router = Router();

router.route('/').get(function(req,res){
    console.log('Request...');
    res.json('Hello, BReads!');
});