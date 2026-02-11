/*
  Warnings:

  - A unique constraint covering the columns `[tenant_id,link_slug]` on the table `eventos` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tenant_id,evento_id,email]` on the table `inscricoes` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[tenant_id,email]` on the table `usuarios` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `tenant_id` to the `eventos` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenant_id` to the `inscricoes` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tenant_id` to the `usuarios` table without a default value. This is not possible if the table is not empty.

*/
-- DropIndex
DROP INDEX `usuarios_email_key` ON `usuarios`;

-- AlterTable
ALTER TABLE `eventos` ADD COLUMN `tenant_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `inscricoes` ADD COLUMN `tenant_id` VARCHAR(191) NOT NULL;

-- AlterTable
ALTER TABLE `usuarios` ADD COLUMN `tenant_id` VARCHAR(191) NOT NULL;

-- CreateTable
CREATE TABLE `tenants` (
    `id` VARCHAR(191) NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `status` ENUM('ativo', 'cancelado', 'suspenso') NOT NULL DEFAULT 'ativo',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,
    `logo_url` VARCHAR(191) NULL,

    UNIQUE INDEX `tenants_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE UNIQUE INDEX `eventos_tenant_id_link_slug_key` ON `eventos`(`tenant_id`, `link_slug`);

-- CreateIndex
CREATE UNIQUE INDEX `inscricoes_tenant_id_evento_id_email_key` ON `inscricoes`(`tenant_id`, `evento_id`, `email`);

-- CreateIndex
CREATE UNIQUE INDEX `usuarios_tenant_id_email_key` ON `usuarios`(`tenant_id`, `email`);

-- AddForeignKey
ALTER TABLE `eventos` ADD CONSTRAINT `eventos_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `usuarios` ADD CONSTRAINT `usuarios_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `inscricoes` ADD CONSTRAINT `inscricoes_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
