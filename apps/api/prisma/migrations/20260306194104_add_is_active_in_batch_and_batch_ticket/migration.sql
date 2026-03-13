/*
  Warnings:

  - You are about to drop the column `deleted` on the `batch_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `batch_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `deleted` on the `batches` table. All the data in the column will be lost.
  - You are about to drop the column `deletedAt` on the `batches` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `batch_tickets` DROP COLUMN `deleted`,
    DROP COLUMN `deletedAt`,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true;

-- AlterTable
ALTER TABLE `batches` DROP COLUMN `deleted`,
    DROP COLUMN `deletedAt`,
    ADD COLUMN `isActive` BOOLEAN NOT NULL DEFAULT true;
