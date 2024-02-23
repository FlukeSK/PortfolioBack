const catchError = require('../utils/catch-error');
const userService = require('../services/user-service');
const createError = require('../utils/create-error');
const hashService = require('../services/hash-service');
const jwtService = require('../services/jwt-service');

exports.register = catchError(async (req, res, next) => {
    console.log(req.body , '*************************')
  const existsUser = await userService.findUserByemailOrMobile(
    req.body.email || req.body.mobile
    );

    if (existsUser) {
    createError('EMAIL_MOBILE_IN_USE', 400);
    }
    
    req.body.password = await hashService.hash(req.body.password);

    const newUser = await userService.createUser(req.body);
    const payload = { userId: newUser.id };
    const accessToken = jwtService.sign(payload);
    delete newUser.password

    res.status(201).json({ accessToken, newUser });
});

exports.login = catchError(async (req, res, next) => {
  console.log(req.body,"check")
  const existsUser = await userService.findUserByemailOrMobile(req.body.emailOrMobile);

  if (!existsUser) {
    createError('Invalid credentials', 400);
  }
  const isMatch = await hashService.compare(req.body.password, existsUser.password);

  if (!isMatch) {
    createError('Invalid credentials', 400);
  }

  const payload = { userId: existsUser.id };
  const accessToken = jwtService.sign(payload);
  delete existsUser.password;

  res.status(200).json({ accessToken, user: existsUser });
});

exports.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user });
}
