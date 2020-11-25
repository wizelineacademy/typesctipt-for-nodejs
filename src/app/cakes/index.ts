import { Router } from 'express';

/**
 * routes defined for Cakes
 */
const router: Router = Router();

// GET
router.get('/', (req, res) => {
    res.json({cake: true, method: req.method});
});

// POST
router.post('/', (req, res) => {
    res.json({cake: true, method: req.method});
});

// UPDATE
router.patch('/', (req, res) => {
    res.json({cake: true, method: req.method});
});

// DELETE
router.delete('/', (req, res) => {
    res.json({cake: true, method: req.method});
});

export default router;
