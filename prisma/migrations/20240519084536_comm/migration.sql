/*
  Warnings:

  - You are about to drop the column `commenatire` on the `contacte` table. All the data in the column will be lost.
  - Added the required column `commentaire` to the `contacte` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `contacte` DROP COLUMN `commenatire`,
    ADD COLUMN `commentaire` VARCHAR(191) NOT NULL;
