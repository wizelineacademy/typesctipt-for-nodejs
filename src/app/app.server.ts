import express, { Application } from 'express';
import Logger from '../utils/logger';

class App {
  public app: Application;

  public log: Logger;

  public port: number;

  constructor(appInit: { port: number; middleWares: any; controllers: any; }) {
    this.app = express();
    this.port = appInit.port;
    this.log = new Logger();

    this.middlewares(appInit.middleWares);
    this.routes(appInit.controllers);
  }

  private middlewares(middleWares: Array<any>) {
    middleWares.forEach((middleWare: any) => {
      this.app.use(middleWare);
    });
  }

  private routes(controllers: Array<any>) {
    controllers.forEach((controller: any) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(this.port, () => {
      this.log.success(`\n 🌐 Server listening on: http://localhost:${this.port} \n`);
    });
  }
}

export default App;
