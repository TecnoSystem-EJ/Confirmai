-- AlterTable
ALTER TABLE `usuarios` MODIFY `cargo` ENUM('membro', 'admin', 'global_admin') NOT NULL DEFAULT 'membro',
    MODIFY `tenant_id` VARCHAR(191) NULL;
