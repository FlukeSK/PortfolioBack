const express = require('express');

const authenticate = require('../middleware/authenticate');

const authController = require('../controller/auth-controller');

const { validateRegister, validateLogin } = require('../middleware/validator/validate-auth');

const router = express.Router();

// =============== < router > =============== //
router.post('/register', validateRegister, authController.register);
router.post('/login', validateLogin, authController.login);
router.get('/me', authenticate, authController.getMe);

module.exports = router;
