-- AlterTable
ALTER TABLE `product` MODIFY `availability` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `displayDiscountPercentage` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `familyName` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `subfamilyName` VARCHAR(191) NOT NULL DEFAULT '',
    MODIFY `sectionName` VARCHAR(191) NOT NULL DEFAULT '';
