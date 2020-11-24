import { Router } from 'express';

export const router: Router = Router();

// Register new Sale
router.route('/').post(function(req,res){
    console.log('POST Request...');
    res.json('Register Sale');
});