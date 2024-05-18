/*
  Warnings:

  - The primary key for the `favorite` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `favorite` table. All the data in the column will be lost.
  - You are about to drop the column `displayDiscountPercentage` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `familyName` on the `product` table. All the data in the column will be lost.
  - You are about to drop the column `subfamilyName` on the `product` table. All the data in the column will be lost.
  - The primary key for the `user` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `user` table. All the data in the column will be lost.
  - The primary key for the `website` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `website` table. All the data in the column will be lost.
  - Added the required column `favorite_id` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `prixs` to the `Favorite` table without a default value. This is not possible if the table is not empty.
  - Added the required column `user_id` to the `User` table without a default value. This is not possible if the table is not empty.
  - Added the required column `website_id` to the `Website` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `contacte` DROP FOREIGN KEY `contacte_userId_fkey`;

-- DropForeignKey
ALTER TABLE `favorite` DROP FOREIGN KEY `Favorite_userId_fkey`;

-- DropForeignKey
ALTER TABLE `notification` DROP FOREIGN KEY `notification_userId_fkey`;

-- DropForeignKey
ALTER TABLE `product` DROP FOREIGN KEY `Product_websiteId_fkey`;

-- AlterTable
ALTER TABLE `favorite` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `favorite_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD COLUMN `prixs` INTEGER NOT NULL,
    ADD PRIMARY KEY (`favorite_id`);

-- AlterTable
ALTER TABLE `product` DROP COLUMN `displayDiscountPercentage`,
    DROP COLUMN `familyName`,
    DROP COLUMN `subfamilyName`,
    ALTER COLUMN `sectionName` DROP DEFAULT;

-- AlterTable
ALTER TABLE `user` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `user_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`user_id`);

-- AlterTable
ALTER TABLE `website` DROP PRIMARY KEY,
    DROP COLUMN `id`,
    ADD COLUMN `website_id` INTEGER NOT NULL AUTO_INCREMENT,
    ADD PRIMARY KEY (`website_id`);

-- AddForeignKey
ALTER TABLE `Product` ADD CONSTRAINT `Product_websiteId_fkey` FOREIGN KEY (`websiteId`) REFERENCES `Website`(`website_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Favorite` ADD CONSTRAINT `Favorite_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `notification` ADD CONSTRAINT `notification_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `contacte` ADD CONSTRAINT `contacte_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`user_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
