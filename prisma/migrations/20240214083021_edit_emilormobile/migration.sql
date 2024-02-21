/*
  Warnings:

  - You are about to drop the column `email` on the `admins` table. All the data in the column will be lost.
  - You are about to drop the column `email` on the `users` table. All the data in the column will be lost.
  - You are about to drop the column `mobile` on the `users` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[emailOrMobile]` on the table `admins` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[emailOrMobile]` on the table `users` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `date` to the `FullQue` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `admins_email_key` ON `admins`;

-- DropIndex
DROP INDEX `users_email_key` ON `users`;

-- DropIndex
DROP INDEX `users_mobile_key` ON `users`;

-- AlterTable
ALTER TABLE `admins` DROP COLUMN `email`,
    ADD COLUMN `emailOrMobile` VARCHAR(191) NULL;

-- AlterTable
ALTER TABLE `fullque` ADD COLUMN `date` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `users` DROP COLUMN `email`,
    DROP COLUMN `mobile`,
    ADD COLUMN `emailOrMobile` VARCHAR(191) NULL;

-- CreateIndex
CREATE UNIQUE INDEX `admins_emailOrMobile_key` ON `admins`(`emailOrMobile`);

-- CreateIndex
CREATE UNIQUE INDEX `users_emailOrMobile_key` ON `users`(`emailOrMobile`);
