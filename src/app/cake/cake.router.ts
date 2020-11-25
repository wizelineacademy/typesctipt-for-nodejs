import express, {Router} from 'express';

export const router: Router = express.Router()

router.get('/', (req, res) => {
	res.send('hello from cake router');
})