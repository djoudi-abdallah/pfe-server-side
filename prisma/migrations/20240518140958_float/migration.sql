/*
  Warnings:

  - You are about to alter the column `pricef` on the `favorite` table. The data in that column could be lost. The data in that column will be cast from `Int` to `Double`.

*/
-- AlterTable
ALTER TABLE `favorite` MODIFY `pricef` DOUBLE NOT NULL;
