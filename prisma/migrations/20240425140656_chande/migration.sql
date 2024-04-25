/*
  Warnings:

  - Added the required column `contentSummary` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `expirationDate` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rawMaterials` to the `Menu` table without a default value. This is not possible if the table is not empty.
  - Added the required column `size` to the `Menu` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `Menu` ADD COLUMN `contentSummary` VARCHAR(191) NOT NULL,
    ADD COLUMN `expirationDate` VARCHAR(191) NOT NULL,
    ADD COLUMN `rawMaterials` VARCHAR(191) NOT NULL,
    ADD COLUMN `size` VARCHAR(191) NOT NULL;
