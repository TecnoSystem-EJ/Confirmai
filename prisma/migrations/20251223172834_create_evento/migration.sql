-- CreateTable
CREATE TABLE `eventos` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `titulo` VARCHAR(191) NOT NULL,
    `descricao` TEXT NULL,
    `link_slug` VARCHAR(191) NOT NULL,
    `closing_date` DATETIME(3) NOT NULL,
    `status` ENUM('ativo', 'encerrado', 'rascunho') NOT NULL DEFAULT 'rascunho',
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `eventos_link_slug_key`(`link_slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
