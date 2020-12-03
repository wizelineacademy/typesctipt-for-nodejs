import express, { Express, json } from 'express';
import morgan from 'morgan';
import config from '../config';
import cakeRoutes from './cakes/cake.router';
import saleRoutes from './sales/sale.router';

const app: Express = express();

// Config middleware
app.use(morgan('dev'));
app.use(json());

// config routes
app.use('/cakes', cakeRoutes);
app.use('/sales', saleRoutes);

// Default route
app.use((req, res, next) => {
    const error = new Error(`Resource not found: ${req.originalUrl}`);
    res.status(404);
    next(error);
});

// Error handling
app.use((error, req, res, next) => {
    res.status(res.statusCode === 200 ? 500 : res.statusCode);
    return res.json({
        message: error.message,
        stack: config.env === 'production' ? undefined : error.stack
    });
});

/**
 * Initializes the http server on the given port
 * @param {number} port the port on which you want your server to listen
 */
const init = (port: number) => {
    app.listen(port, () => {
      console.info(`Server running on port: ${port}`);
    });
} 

export default init;