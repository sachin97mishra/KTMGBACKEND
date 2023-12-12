
class HttpError extends Error{
    constructor(message,errorCode){
        super(message);
        this.code = errorCode;
    }
}

//Test

module.exports = HttpError;