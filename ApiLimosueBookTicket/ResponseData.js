var responseData = {};

exports.create = function(success, message, error_code) {
    responseData =  {
        "success": success,
        "message": message,
        "error_code": error_code,
        "data": {
        }
    };
    return responseData;
};