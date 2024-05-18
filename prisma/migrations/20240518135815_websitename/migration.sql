/*
  Warnings:

  - You are about to drop the column `name` on the `website` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[websitename]` on the table `Website` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `websitename` to the `Website` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `Website_name_key` ON `website`;

-- AlterTable
ALTER TABLE `website` DROP COLUMN `name`,
    ADD COLUMN `websitename` VARCHAR(191) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `Website_websitename_key` ON `Website`(`websitename`);
