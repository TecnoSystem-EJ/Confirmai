/*
  Warnings:

  - You are about to drop the column `serviceFee` on the `batch_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `limite_vagas` on the `eventos` table. All the data in the column will be lost.
  - You are about to drop the column `numero_inscritos` on the `eventos` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `batch_tickets` DROP COLUMN `serviceFee`;

-- AlterTable
ALTER TABLE `eventos` DROP COLUMN `limite_vagas`,
    DROP COLUMN `numero_inscritos`,
    MODIFY `status` ENUM('ativo', 'encerrado', 'rascunho') NOT NULL DEFAULT 'ativo';
