/*
  Warnings:

  - You are about to drop the column `batchId` on the `batch_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `batch_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `batch_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `soldQuantity` on the `batch_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `ticketTypeId` on the `batch_tickets` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `batch_tickets` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `batch_tickets` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(19,4)`.
  - You are about to drop the column `createdAt` on the `batches` table. All the data in the column will be lost.
  - You are about to drop the column `endDate` on the `batches` table. All the data in the column will be lost.
  - You are about to drop the column `isActive` on the `batches` table. All the data in the column will be lost.
  - You are about to drop the column `startDate` on the `batches` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `batches` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ticket_types` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ticket_types` table. All the data in the column will be lost.
  - You are about to drop the column `batchTicketId` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `eventId` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `ownerDocument` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `ownerEmail` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `ownerName` on the `tickets` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `tickets` table. All the data in the column will be lost.
  - You are about to alter the column `price` on the `tickets` table. The data in that column could be lost. The data in that column will be cast from `Decimal(10,2)` to `Decimal(19,4)`.
  - You are about to drop the `inscricoes` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[batch_id,ticket_type_id]` on the table `batch_tickets` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `batch_id` to the `batch_tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `ticket_type_id` to the `batch_tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `batch_tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `end_date` to the `batches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `start_date` to the `batches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `batches` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `ticket_types` table without a default value. This is not possible if the table is not empty.
  - Added the required column `batch_ticket_id` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `event_id` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `order_id` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_email` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `owner_name` to the `tickets` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updated_at` to the `tickets` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `batch_tickets` DROP FOREIGN KEY `batch_tickets_batchId_fkey`;

-- DropForeignKey
ALTER TABLE `batch_tickets` DROP FOREIGN KEY `batch_tickets_ticketTypeId_fkey`;

-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `inscricoes_evento_id_fkey`;

-- DropForeignKey
ALTER TABLE `inscricoes` DROP FOREIGN KEY `inscricoes_tenant_id_fkey`;

-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `tickets_batchTicketId_fkey`;

-- DropForeignKey
ALTER TABLE `tickets` DROP FOREIGN KEY `tickets_eventId_fkey`;

-- DropIndex
DROP INDEX `batch_tickets_batchId_idx` ON `batch_tickets`;

-- DropIndex
DROP INDEX `batch_tickets_batchId_ticketTypeId_key` ON `batch_tickets`;

-- DropIndex
DROP INDEX `batch_tickets_ticketTypeId_fkey` ON `batch_tickets`;

-- DropIndex
DROP INDEX `tickets_batchTicketId_fkey` ON `tickets`;

-- DropIndex
DROP INDEX `tickets_eventId_idx` ON `tickets`;

-- DropIndex
DROP INDEX `tickets_orderId_idx` ON `tickets`;

-- AlterTable
ALTER TABLE `batch_tickets` DROP COLUMN `batchId`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `isActive`,
    DROP COLUMN `soldQuantity`,
    DROP COLUMN `ticketTypeId`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `batch_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `reserved_quantity` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `sold_quantity` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `ticket_type_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    MODIFY `price` DECIMAL(19, 4) NOT NULL;

-- AlterTable
ALTER TABLE `batches` DROP COLUMN `createdAt`,
    DROP COLUMN `endDate`,
    DROP COLUMN `isActive`,
    DROP COLUMN `startDate`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `end_date` DATETIME(3) NOT NULL,
    ADD COLUMN `is_active` BOOLEAN NOT NULL DEFAULT true,
    ADD COLUMN `start_date` DATETIME(3) NOT NULL,
    ADD COLUMN `total_sold` INTEGER NOT NULL DEFAULT 0,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `ticket_types` DROP COLUMN `createdAt`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL;

-- AlterTable
ALTER TABLE `tickets` DROP COLUMN `batchTicketId`,
    DROP COLUMN `createdAt`,
    DROP COLUMN `eventId`,
    DROP COLUMN `orderId`,
    DROP COLUMN `ownerDocument`,
    DROP COLUMN `ownerEmail`,
    DROP COLUMN `ownerName`,
    DROP COLUMN `updatedAt`,
    ADD COLUMN `batch_ticket_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `event_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `order_id` VARCHAR(191) NOT NULL,
    ADD COLUMN `owner_document` VARCHAR(191) NULL,
    ADD COLUMN `owner_email` VARCHAR(191) NOT NULL,
    ADD COLUMN `owner_name` VARCHAR(191) NOT NULL,
    ADD COLUMN `updated_at` DATETIME(3) NOT NULL,
    MODIFY `price` DECIMAL(19, 4) NOT NULL;

-- DropTable
DROP TABLE `inscricoes`;

-- CreateTable
CREATE TABLE `global_payment_config` (
    `id` VARCHAR(191) NOT NULL,
    `default_platform_fee_percent` DECIMAL(5, 2) NOT NULL DEFAULT 10,
    `default_platform_fee_fixed` DECIMAL(10, 2) NOT NULL DEFAULT 0,
    `default_service_fee_percent` DECIMAL(5, 2) NOT NULL DEFAULT 0,
    `default_service_fee_fixed` DECIMAL(10, 2) NOT NULL DEFAULT 5,
    `default_service_fee_payer_type` VARCHAR(191) NOT NULL DEFAULT 'buyer',
    `accept_credit_card` BOOLEAN NOT NULL DEFAULT true,
    `accept_debit_card` BOOLEAN NOT NULL DEFAULT true,
    `accept_pix` BOOLEAN NOT NULL DEFAULT true,
    `accept_boleto` BOOLEAN NOT NULL DEFAULT false,
    `max_installments` INTEGER NOT NULL DEFAULT 5,
    `min_installment_value` DECIMAL(19, 4) NOT NULL DEFAULT 50,
    `interest_free` INTEGER NOT NULL DEFAULT 3,
    `allow_refunds` BOOLEAN NOT NULL DEFAULT true,
    `refund_deadline_days` INTEGER NOT NULL DEFAULT 7,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `stripe_accounts` (
    `id` VARCHAR(191) NOT NULL,
    `tenant_id` VARCHAR(191) NOT NULL,
    `account_id` VARCHAR(191) NOT NULL,
    `account_type` ENUM('STANDARD', 'EXPRESS', 'CUSTOM') NOT NULL DEFAULT 'STANDARD',
    `account_status` ENUM('PENDING', 'ENABLED', 'DISABLED', 'RESTRICTED') NOT NULL DEFAULT 'PENDING',
    `details_submitted` BOOLEAN NOT NULL DEFAULT false,
    `charges_enabled` BOOLEAN NOT NULL DEFAULT false,
    `payouts_enabled` BOOLEAN NOT NULL DEFAULT false,
    `country` VARCHAR(191) NOT NULL DEFAULT 'BR',
    `currency` VARCHAR(191) NOT NULL DEFAULT 'brl',
    `email` VARCHAR(191) NULL,
    `business_type` ENUM('INDIVIDUAL', 'COMPANY') NULL,
    `onboarded_at` DATETIME(3) NULL,
    `last_sync_at` DATETIME(3) NULL,
    `requirements_data` JSON NULL,
    `capabilities_data` JSON NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `stripe_accounts_tenant_id_key`(`tenant_id`),
    UNIQUE INDEX `stripe_accounts_account_id_key`(`account_id`),
    INDEX `stripe_accounts_account_id_idx`(`account_id`),
    INDEX `stripe_accounts_tenant_id_idx`(`tenant_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `orders` (
    `id` VARCHAR(191) NOT NULL,
    `tenant_id` VARCHAR(191) NOT NULL,
    `event_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `subtotal` DECIMAL(19, 4) NOT NULL,
    `service_fee` DECIMAL(19, 4) NOT NULL,
    `platform_fee` DECIMAL(19, 4) NOT NULL,
    `total` DECIMAL(19, 4) NOT NULL,
    `status` ENUM('PENDING', 'PROCESSING', 'PAID', 'CONFIRMED', 'EXPIRED', 'FAILED', 'CANCELED', 'REFUNDED', 'PARTIAL_REFUND') NOT NULL DEFAULT 'PENDING',
    `payment_method` ENUM('CREDIT_CARD', 'DEBIT_CARD', 'PIX', 'BOLETO', 'WALLET') NULL,
    `payment_provider` VARCHAR(191) NULL DEFAULT 'stripe',
    `stripe_payment_intent_id` VARCHAR(191) NULL,
    `stripe_client_secret` VARCHAR(191) NULL,
    `stripe_transfer_id` VARCHAR(191) NULL,
    `stripe_application_fee` INTEGER NULL,
    `payment_url` VARCHAR(191) NULL,
    `qr_code_data` TEXT NULL,
    `boleto_barcode` VARCHAR(191) NULL,
    `paid_at` DATETIME(3) NULL,
    `confirmed_at` DATETIME(3) NULL,
    `canceled_at` DATETIME(3) NULL,
    `refunded_at` DATETIME(3) NULL,
    `expires_at` DATETIME(3) NULL,
    `notes` TEXT NULL,
    `cancel_reason` TEXT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    UNIQUE INDEX `orders_stripe_payment_intent_id_key`(`stripe_payment_intent_id`),
    INDEX `orders_tenant_id_idx`(`tenant_id`),
    INDEX `orders_event_id_idx`(`event_id`),
    INDEX `orders_stripe_payment_intent_id_idx`(`stripe_payment_intent_id`),
    INDEX `orders_status_idx`(`status`),
    INDEX `orders_created_at_idx`(`created_at`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `order_items` (
    `id` VARCHAR(191) NOT NULL,
    `order_id` VARCHAR(191) NOT NULL,
    `batch_ticket_id` VARCHAR(191) NOT NULL,
    `ticket_type_name` VARCHAR(191) NOT NULL,
    `batch_name` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `price` DECIMAL(19, 4) NOT NULL,
    `total` DECIMAL(19, 4) NOT NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `order_items_order_id_idx`(`order_id`),
    INDEX `order_items_batch_ticket_id_idx`(`batch_ticket_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `reservations` (
    `id` VARCHAR(191) NOT NULL,
    `batch_ticket_id` VARCHAR(191) NOT NULL,
    `user_id` VARCHAR(191) NOT NULL,
    `quantity` INTEGER NOT NULL,
    `expires_at` DATETIME(3) NOT NULL,
    `status` ENUM('ACTIVE', 'EXPIRED', 'CONVERTED', 'CANCELLED') NOT NULL DEFAULT 'ACTIVE',
    `ip_address` VARCHAR(191) NULL,
    `user_agent` VARCHAR(191) NULL,
    `created_at` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updated_at` DATETIME(3) NOT NULL,

    INDEX `reservations_batch_ticket_id_idx`(`batch_ticket_id`),
    INDEX `reservations_expires_at_idx`(`expires_at`),
    INDEX `reservations_status_idx`(`status`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateIndex
CREATE INDEX `batch_tickets_batch_id_idx` ON `batch_tickets`(`batch_id`);

-- CreateIndex
CREATE UNIQUE INDEX `batch_tickets_batch_id_ticket_type_id_key` ON `batch_tickets`(`batch_id`, `ticket_type_id`);

-- CreateIndex
CREATE INDEX `tickets_order_id_idx` ON `tickets`(`order_id`);

-- CreateIndex
CREATE INDEX `tickets_event_id_idx` ON `tickets`(`event_id`);

-- AddForeignKey
ALTER TABLE `batch_tickets` ADD CONSTRAINT `batch_tickets_batch_id_fkey` FOREIGN KEY (`batch_id`) REFERENCES `batches`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `batch_tickets` ADD CONSTRAINT `batch_tickets_ticket_type_id_fkey` FOREIGN KEY (`ticket_type_id`) REFERENCES `ticket_types`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `eventos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_batch_ticket_id_fkey` FOREIGN KEY (`batch_ticket_id`) REFERENCES `batch_tickets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `tickets` ADD CONSTRAINT `tickets_checkedInBy_fkey` FOREIGN KEY (`checkedInBy`) REFERENCES `usuarios`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `stripe_accounts` ADD CONSTRAINT `stripe_accounts_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_tenant_id_fkey` FOREIGN KEY (`tenant_id`) REFERENCES `tenants`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_event_id_fkey` FOREIGN KEY (`event_id`) REFERENCES `eventos`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `orders` ADD CONSTRAINT `orders_user_id_fkey` FOREIGN KEY (`user_id`) REFERENCES `usuarios`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_order_id_fkey` FOREIGN KEY (`order_id`) REFERENCES `orders`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `order_items` ADD CONSTRAINT `order_items_batch_ticket_id_fkey` FOREIGN KEY (`batch_ticket_id`) REFERENCES `batch_tickets`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `reservations` ADD CONSTRAINT `reservations_batch_ticket_id_fkey` FOREIGN KEY (`batch_ticket_id`) REFERENCES `batch_tickets`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
