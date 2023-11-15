const NotFoundError = (req, res, next) => {
    return res.status(404).json({
        statusCode: res.statusCode,
        error: {
            type: 'NotFound',
            message: "not found " + req.url + " route"
        }
    });
}

const ErrorHandler = (err, req, res, next) => {
    return res.json({
        statusCode: err.statusCode || 500,
        error: {
            message: err.message || "InternalServerError"
        }
    });
}

module.exports = {
    NotFoundError,
    ErrorHandler
};