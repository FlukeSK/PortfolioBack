const Joi = require('joi');

const targetUserIdSchema = Joi.object({
    targetUserId: Joi.number().positive().required()
});

// =============== < Export > =============== //
exports.validateTargetUserId = (req, res, next) => {
    const { value, error } = targetUserIdSchema.validate(req.params)
    if (error) {
        throw error;
    }
    console.log(value, "value")
    req.targetUserId = value.targetUserId;
    next();
};