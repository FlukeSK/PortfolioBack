const catchError = require("../utils/catch-error");

exports.register = catchError(async (req, res, next) => {
    console.log(req.body)
});

exports.login = catchError(async (req, res, next) => {});
