

const validate = schmea => (req, res, next) => {
    const { value, error } = schmea.validate(req.body); // error = new validationError()

    if (error) {
        throw error;
    }   
    req.body = value;
    next();
}

module.exports = validate;