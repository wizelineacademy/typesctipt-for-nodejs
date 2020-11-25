import {
  keyword, red, ChalkFunction, greenBright,
} from 'chalk';

class Logger {
  public log;

  public onError: ChalkFunction;

  public onWarning: ChalkFunction;

  public onSuccess: ChalkFunction;

  constructor() {
    this.log = console.log;
    this.onError = red;
    this.onWarning = keyword('orange');
    this.onSuccess = greenBright.bold;
  }

  public success(message: string) {
    this.log(this.onSuccess(message));
  }

  public warning(message: string) {
    this.log(this.onWarning(message));
  }

  public error(message: string) {
    this.log(this.onError(message));
  }
}

export default Logger;
