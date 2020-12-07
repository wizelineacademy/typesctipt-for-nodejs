import express, {Express} from 'express';
import { router as cakeRouter } from './cake/cake.router';
import { router as sellRouter } from './sell/sell.router';

const app: Express = express();
app.use('/cakes', cakeRouter);
app.use('/sales', sellRouter);

export const initServer = (port: number) => (
	app.listen(port, () => {
		console.log('Server listen on port', port);
	})
);

