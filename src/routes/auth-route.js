const express = require('express');

const authenticate = require('../middleware/authenticate');

const authController = require('../controller/auth-controller');

const { validateRegister, validateLogin } = require('../middleware/validator/validate-auth');

const router = express.Router();

// =============== < router > =============== //
router.post('/register', validateRegister, authController.register);
router.post('/login', validateLogin, authController.login);
router.get('/me', authenticate, authController.getMe);
// router.get('/home', authenticate, authController.home);
// router.post('/cats', authenticate, authController.cats);
// router.get('/food', authenticate, authController.food);
// router.post('/que', authenticate, authController.que);
// router.get('/info', authenticate, authController.info);
// router.post('/checkuser', authenticate, authController.checkuser);
// router.post('/checkque', authenticate, authController.checkque);



module.exports = router;
