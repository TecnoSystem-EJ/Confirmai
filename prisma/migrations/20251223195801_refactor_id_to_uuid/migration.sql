/*
  Warnings:

  - The primary key for the `eventos` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `inscricoes` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - The primary key for the `usuarios` table will be changed. If it partially fails, the table could be left without primary key constraint.

*/
-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `inscricoes_evento_id_fkey`;

-- DropIndex
DROP INDEX `inscricoes_evento_id_fkey` ON `inscricoes`;

-- AlterTable
ALTER TABLE `eventos` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `inscricoes` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    MODIFY `evento_id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AlterTable
ALTER TABLE `usuarios` DROP PRIMARY KEY,
    MODIFY `id` VARCHAR(191) NOT NULL,
    ADD PRIMARY KEY (`id`);

-- AddForeignKey
ALTER TABLE `inscricoes` ADD CONSTRAINT `inscricoes_evento_id_fkey` FOREIGN KEY (`evento_id`) REFERENCES `eventos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
