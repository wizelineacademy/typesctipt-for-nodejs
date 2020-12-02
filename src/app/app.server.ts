import express, { Application } from 'express'
import { Logger } from '../utils/logger';

class App {
    private app: Application;
    private port: string;
    private static instance: App;

    private constructor(_port: string, _routers: Object[]) {
        this.app = express();
        this.port = _port;
        this.setMiddleware();
        this.setRoutes(_routers);
    }

    /**
     * Always call this method to have a single instance for the class
     */
    public static getInstance(_port: string, _routers: Object[]): App {
        return this.instance || (this.instance = new App(_port, _routers));
    }

    private setMiddleware() {
        this.app.use(express.json());
    }

    private setRoutes(routers) {
        routers.map(route => {
            this.app.use(route);
        });
    }

    public listen() {
        this.app.listen(this.port, () => {
            Logger.LogSucess(`App listening on port ${this.port}`);
        });
    }
}

export default App;