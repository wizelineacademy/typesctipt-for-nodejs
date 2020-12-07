import config from './config';
import init from './app/app.server';

// Server init
init(config.port);