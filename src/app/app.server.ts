import { Router } from 'express';

import cakeRouter from './cake/cake.router';
import saleRouter from './sale/sale.router';

const router: Router = Router();

router.use('/cakes', cakeRouter);
router.use('/sales', saleRouter);

export default router;