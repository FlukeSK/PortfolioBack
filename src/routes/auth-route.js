const express = require("express");
const authController = require("../controller/auth-controller");
const validate = require("../middleware/validator/auth-validate");
const router = express.Router();

router.post("/register", validate.validateRegister, authController.register);
router.post("/login", validate.validateLogin, authController.login);
module.exports = router;
