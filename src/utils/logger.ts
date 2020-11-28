export class Logger {
    static sucessColor: string = '\x1b[32m%s\x1b[0m';
    static errorColor: string = '\x1b[31m%s\x1b[0m';
    static warningColor: string = '\x1b[33m%s\x1b[0m';

    static LogSucess(message) {
        console.log(this.sucessColor, message);
    }

    static LogError(message) {
        console.log(this.errorColor, message);
    }

    static LogWarning(message) {
        console.log(this.warningColor, message);
    }
}