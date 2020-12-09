export class Logger{
    static successColor: string = 'green';
    static errorColor: string = 'red';
    static warningColor: string = 'orange';

    static LogSucces(message){
        console.log(this.successColor, message);
    }

    static LogError(message){
        console.log(this.errorColor, message);
    }

    static LogWarning(message){
        console.log(this.warningColor, message);
    }
}