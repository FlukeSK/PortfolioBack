/*
  Warnings:

  - You are about to drop the column `Role` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `emailOrMobile` on the `users` table. All the data in the column will be lost.
  - You are about to drop the `admins` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[mobile]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `count` to the `UserQue` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `admins` DROP FOREIGN KEY `admins_user_id_fkey`;

-- DropIndex
DROP INDEX `users_emailOrMobile_key` ON `users`;

-- AlterTable
ALTER TABLE `infocat` ADD COLUMN `image` VARCHAR(191) NULL,
    ADD COLUMN `title` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `userque` ADD COLUMN `count` BOOLEAN NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `Role`,
    DROP COLUMN `emailOrMobile`,
    ADD COLUMN `email` VARCHAR(191) NULL,
    ADD COLUMN `mobile` VARCHAR(191) NULL,
    ADD COLUMN `status` ENUM('user', 'admin') NOT NULL DEFAULT 'user';

-- DropTable
DROP TABLE `admins`;

-- CreateIndex
CREATE UNIQUE INDEX `users_email_key` ON `users`(`email`);

-- CreateIndex
CREATE UNIQUE INDEX `users_mobile_key` ON `users`(`mobile`);
