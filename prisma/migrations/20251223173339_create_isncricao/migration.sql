-- CreateTable
CREATE TABLE `inscricoes` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `evento_id` INTEGER NOT NULL,
    `nome` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `curso` VARCHAR(191) NULL,
    `status` ENUM('pendente', 'confirmada', 'cancelada') NOT NULL DEFAULT 'pendente',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `inscricoes` ADD CONSTRAINT `inscricoes_evento_id_fkey` FOREIGN KEY (`evento_id`) REFERENCES `eventos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
