const catchError = require('../utils/catch-error');
const prisma = require('../models/prisma');

exports.infocat = catchError(async (req, res, next) => {

    const data = await prisma.infoCat.findMany({})

    return res.status(200).json({ data })
})

exports.deleteCardCat = catchError(async (req, res, next) => {
    console.log(req.params)
    await prisma.infoCat.delete({where: {id: +req.params.id}})

    return res.status(204).json({})
})