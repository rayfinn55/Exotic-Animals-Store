const errorHandler = (e, req, res, next) => {
    res.status(e.statusCode).json({
        error: e.name,
        message: e.message,
    });
};

class NewErrorMessage extends Error {
    constructor(message) {
        super(message);
        this.name = 'NewErrorMessage';
        this.statusCode = "500";
        this.message = message;
    }
}

module.exports= {
    errorHandler,
    NewErrorMessage,
};