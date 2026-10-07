-- CreateTable
CREATE TABLE `Unit` (
    `unitId` VARCHAR(191) NOT NULL,
    `buildingId` VARCHAR(191) NOT NULL,
    `propertyId` VARCHAR(191) NOT NULL,
    `label` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NOT NULL,
    `areaSqm` INTEGER NOT NULL,
    `parkingBay` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`unitId`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lease` (
    `id` VARCHAR(191) NOT NULL,
    `unitId` VARCHAR(191) NULL,
    `fileName` VARCHAR(191) NOT NULL,
    `rawText` LONGTEXT NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending_review',
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Lease_unitId_fkey`(`unitId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LeaseField` (
    `id` VARCHAR(191) NOT NULL,
    `leaseId` VARCHAR(191) NOT NULL,
    `key` VARCHAR(191) NOT NULL,
    `value` TEXT NOT NULL,
    `confidence` DOUBLE NOT NULL,
    `sourceSnippet` TEXT NOT NULL,
    `sourceLocation` VARCHAR(191) NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `reviewedAt` DATETIME(3) NULL,
    `reviewedBy` VARCHAR(191) NULL,

    INDEX `LeaseField_leaseId_key_idx`(`leaseId`, `key`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `LeaseFlag` (
    `id` VARCHAR(191) NOT NULL,
    `leaseId` VARCHAR(191) NOT NULL,
    `kind` VARCHAR(191) NOT NULL,
    `severity` VARCHAR(191) NOT NULL,
    `message` TEXT NOT NULL,
    `evidence` TEXT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',

    INDEX `LeaseFlag_leaseId_fkey`(`leaseId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `RuleResult` (
    `id` VARCHAR(191) NOT NULL,
    `leaseId` VARCHAR(191) NOT NULL,
    `ruleId` VARCHAR(191) NOT NULL,
    `status` VARCHAR(191) NOT NULL,
    `reason` TEXT NOT NULL,
    `severity` VARCHAR(191) NOT NULL,
    `sourceRef` VARCHAR(191) NULL,
    `status2` VARCHAR(191) NOT NULL DEFAULT 'pending',

    UNIQUE INDEX `RuleResult_leaseId_ruleId_key`(`leaseId`, `ruleId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Issue` (
    `id` VARCHAR(191) NOT NULL,
    `unitId` VARCHAR(191) NOT NULL,
    `photoPaths` LONGTEXT NOT NULL,
    `condition` TEXT NOT NULL,
    `conditionScore` VARCHAR(191) NOT NULL,
    `contents` LONGTEXT NOT NULL,
    `damages` LONGTEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `Issue_unitId_fkey`(`unitId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `WorkOrder` (
    `id` VARCHAR(191) NOT NULL,
    `issueId` VARCHAR(191) NOT NULL,
    `unitId` VARCHAR(191) NOT NULL,
    `title` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `status` VARCHAR(191) NOT NULL DEFAULT 'pending',
    `reviewedAt` DATETIME(3) NULL,

    UNIQUE INDEX `WorkOrder_issueId_key`(`issueId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Lease` ADD CONSTRAINT `Lease_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `Unit`(`unitId`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LeaseField` ADD CONSTRAINT `LeaseField_leaseId_fkey` FOREIGN KEY (`leaseId`) REFERENCES `Lease`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `LeaseFlag` ADD CONSTRAINT `LeaseFlag_leaseId_fkey` FOREIGN KEY (`leaseId`) REFERENCES `Lease`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `RuleResult` ADD CONSTRAINT `RuleResult_leaseId_fkey` FOREIGN KEY (`leaseId`) REFERENCES `Lease`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Issue` ADD CONSTRAINT `Issue_unitId_fkey` FOREIGN KEY (`unitId`) REFERENCES `Unit`(`unitId`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `WorkOrder` ADD CONSTRAINT `WorkOrder_issueId_fkey` FOREIGN KEY (`issueId`) REFERENCES `Issue`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;
