const Joi = require('joi');
const validate = require('./validator');

// ================ < Register > ================ //
const registerSchema = Joi.object({
    // =============== < FirstName > =============== //
    firstName: Joi.string().required().trim().messages({
        'string.empty':'first name is required',
        'any.required':'first name is required'
    }),
    // =============== < LastName > =============== //
    lastName: Joi.string().required().trim().messages({
        'string.empty':'last name is required',
        'any.required':'last name is required'
    }),

    // =============== < Password > =============== //
    password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
        'string.empty':'password is required',
        'string.pattern.base':'password must be least 6 characters and contain only alphabet and number',
        'any.required':'password is required'
    }),
    // =============== < ConfirmPassword > =============== //
    confirmPassword: Joi.string().valid(Joi.ref('password')).required().messages({
        'string.empty':'password is required',
        'any.only':'password and confirm password did not match',
        'any.required':'confirm password is required'
    })
    .strip(),
    email: Joi.string().required(),
    mobile: Joi.string().required()
});

// ================ < Login > ================ //
const loginSchema = Joi.object({
    // =============== < Email > =============== //
    emailOrMobile: Joi.alternatives([
    Joi.string().email({ tlds: false }),
    Joi.string().pattern(/^[0-9]{10}$/)
    ]).required().messages({
        'string.empty':'invalid email address or mobile number',
        'any.required':'email or mobile is required'
    }),
    
    // =============== < Password > =============== //
    password: Joi.string()
    .pattern(/^[a-zA-Z0-9]{6,}$/)
    .required()
    .messages({
        'string.empty':'password is required',
        'string.pattern.base':'password must be least 6 characters and contain only alphabet and number',
        'any.required':'password is required'
    }),
});

exports.validateRegister = validate(registerSchema);
exports.validateLogin = validate(loginSchema);