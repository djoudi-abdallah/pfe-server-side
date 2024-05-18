/*
  Warnings:

  - You are about to drop the column `prixs` on the `favorite` table. All the data in the column will be lost.
  - Added the required column `pricef` to the `Favorite` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `favorite` DROP COLUMN `prixs`,
    ADD COLUMN `pricef` INTEGER NOT NULL;
