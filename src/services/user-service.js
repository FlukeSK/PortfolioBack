const prisma = require("../models/prisma");

// =============== Register =============== //

exports.findUserByemailOrMobile = (emailOrMobile) =>
  prisma.user.findFirst({
    where: {
      OR: [{ email: emailOrMobile }, { mobile: emailOrMobile }],
    },
  });

exports.createUser = (data) => prisma.user.create({ data });

exports.findUserById = (id) =>
  prisma.user.findUnique({
    where: { id },
  });

exports.updateUserById = (data, id) =>
  prisma.user.update({ data, where: { id } });

  // =============== Booking =============== //

  exports.bookingInfoById = async (id) =>
  await prisma.infoCat.create({
    where: {
      nameCat, genderCat, ageCat, breedCat, createAt, updateAt, deleteAt
    }
  })

  exports.bookingImgById = async (id) =>
  await prisma.infoCat.create({
    where: {
      updateAt, deleteAt
    }
  })