import express, { Application } from 'express'
import { Logger } from '../utils/logger';

class App {
    private app: Application;
    private port: string;

    constructor(_port: string, _controllers: Object[]) {
        this.app = express();
        this.port = _port;
        this.setRoutes(_controllers);
        
    }

    private setRoutes(controllers) {
        controllers.map(controller => {
            this.app.use(controller.router);
        });

    }

    public listen() {
        this.app.listen(this.port, () => {
            Logger.LogSucess(`App listening on port ${this.port}`);
        });
    }
}

export default App;