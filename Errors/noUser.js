const { TMError } = require('./TMError.js');

class UserNotFound extends TMError {
    constructor(message = `user not found`, statusCode = 404) {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
         if(Error.captureStackTrace){
            Error.captureStackTrace(this,this.constructor);
        }
        
    }
}
module.exports = { UserNotFound };