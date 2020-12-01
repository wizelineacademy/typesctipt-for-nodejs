import { initServer } from './app/app.server';
import config from './util/config';

const port:number = config.PORT;

initServer(port);
