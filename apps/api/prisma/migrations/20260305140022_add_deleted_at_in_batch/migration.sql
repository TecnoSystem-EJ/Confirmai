/*
  Warnings:

  - You are about to drop the column `isActive` on the `batch_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `batches` table. All the data in the column will be lost.
  - You are about to drop the column `serviceFee` on the `tickets` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `batch_tickets` DROP COLUMN `isActive`,
    ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `batches` DROP COLUMN `isActive`,
    ADD COLUMN `deleted` BOOLEAN NOT NULL DEFAULT false,
    ADD COLUMN `deletedAt` DATETIME(3) NULL;

-- AlterTable
ALTER TABLE `tickets` DROP COLUMN `serviceFee`;
