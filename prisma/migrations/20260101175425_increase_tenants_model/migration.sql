/*
  Warnings:

  - A unique constraint covering the columns `[cnpj]` on the table `tenants` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[email]` on the table `tenants` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `cnpj` to the `tenants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `email` to the `tenants` table without a default value. This is not possible if the table is not empty.
  - Added the required column `telefone` to the `tenants` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `tenants` ADD COLUMN `cnpj` VARCHAR(14) NOT NULL,
    ADD COLUMN `email` VARCHAR(191) NOT NULL,
    ADD COLUMN `site` VARCHAR(191) NULL,
    ADD COLUMN `telefone` VARCHAR(11) NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX `tenants_cnpj_key` ON `tenants`(`cnpj`);

-- CreateIndex
CREATE UNIQUE INDEX `tenants_email_key` ON `tenants`(`email`);
