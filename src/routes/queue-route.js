
const express = require("express");

const adminauthenticate = require("../middleware/admin-authenticate")
const authenticate = require("../middleware/authenticate")

const bookingController = require("../controller/booking-controller")

const bookingRouter = express.Router();

// =============== < router > =============== //
bookingRouter.post('/updatequeue', adminauthenticate, bookingController.update);
bookingRouter.get('/checkuser', adminauthenticate, bookingController.checkuser);
bookingRouter.get('/checkqueue', adminauthenticate, bookingController.checkqueue);

// =============== < create Queue > =============== //
bookingRouter.post('/createqueue', authenticate, bookingController.create)


module.exports = bookingRouter;