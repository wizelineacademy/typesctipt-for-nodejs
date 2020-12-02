
export class HttpException extends Error{
    constructor(

        public readonly code: number,
        public readonly message: string
    ){
        super(message);
    }


}
export class NotFoundException extends HttpException{

    constructor(message: string){
        super(404, message);
    }
}
export class BadRequestException extends HttpException{

    constructor(message: string){
        super(400, message);
    }
}

