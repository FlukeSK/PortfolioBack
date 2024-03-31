// สร้างฟังชั่นก์คล้ายๆ register 
import { bookingImgById, bookingInfoById } from "../services/user-service";

exports.bookingInfo = catchError(async (req, res, next) => {
    console.log(req.body , '*************************')
  const existsUser = await userService.bookingInfoById(
    req.body.nameCat, req.body.genderCat, req.body.breedCat, req.body.like
    );

    if (existsUser) {
    createError('YOU NOT ADMIN', 400);
    }
    
    req.body.bookingInfoById = await hashService.hash(req.body.bookingInfoById);

    const newUser = await userService.createUser(req.body);
    const payload = { userId: newUser.id };
    delete newUser.bookingInfoById

    res.status(201).json({ accessToken, newUser });
});