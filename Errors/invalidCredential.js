const {TMError}=require('./TMError.js');

class InvalidCredential extends TMError{
    constructor(message,statusCode){
        super(message);
        this.message=message;
        this.statusCode=statusCode;
         if(Error.captureStackTrace){
            Error.captureStackTrace(this,this.constructor);
        }
    }
}
module.exports={InvalidCredential};