const NotFoundError = (req, res, next) =>{
    return res.status(404).json({
        statuscode : res.statusCode,
        error:{
            type: "Not Found",
            message : "not Found" + req.url + "route"
        }
    });
}

const errorHandler = (err, req, res, next) =>{
    return res.json({
        statusCode : err.statusCode || 500,
        error: {
            message : err.message || "Internal Server Error"
        }
    });
}

module.exports = {
    NotFoundError,
    errorHandler
}