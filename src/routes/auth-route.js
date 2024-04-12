const express = require('express');

const authenticate = require('../middleware/authenticate');

const authController = require('../controller/auth-controller');
const infoCatController = require('../controller/infocat-controller')
const { validateRegister, validateLogin } = require('../middleware/validator/validate-auth');
const router = express.Router();

// =============== < router > =============== //
router.post('/register', validateRegister, authController.register);
router.post('/login', validateLogin, authController.login);
router.get('/me', authenticate, authController.getMe);

// =============== < router Cat > =============== //
router.get('/infocat', infoCatController.infocat);
router.delete('/deleteCardCat/:id', infoCatController.deleteCardCat)

// =============== < router Queue > =============== //
// router.post('/que', authenticate, authController.que);
// router.post('/checkuser', authenticate, authController.checkuser);
// router.post('/checkque', authenticate, authController.checkque);



module.exports = router;
