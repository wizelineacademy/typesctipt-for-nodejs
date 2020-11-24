import { Router } from 'express';

export const router: Router = Router();

// List all Cakes
router.route('/').get(function(req,res){
    console.log('GET Request...');
    res.json('List Cakes');
});

// Cake Detail
router.route('/:id').get(function(req,res){
    console.log('GET Request...ID:',req.params.id);
    res.json(`Cake Detail ID ${req.params.id}`);
});

// Register new Cake
router.route('/').post(function(req,res){
    console.log('POST Request...');
    res.json('Register Cake');
});

// Edit a Cake
router.route('/:id').put(function(req,res){
    console.log('PUT Request...ID:', req.params.id);
    res.json(`Edit Cake ID ${req.params.id}`);
});