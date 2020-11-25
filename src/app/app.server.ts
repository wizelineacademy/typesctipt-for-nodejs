import express, {Express} from 'express';
import { router as cakeRouter } from './cake/cake.router';

const app: Express = express();
app.use('/cakes', cakeRouter);

export const initServer = (port: number) => (
	app.listen(port, () => {
		console.log('Server listen on port', port);
	})
);

