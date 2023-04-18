/*
  Warnings:

  - You are about to drop the column `companyId` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `roleId` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the `companies` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `roles` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `company` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `role` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_companyId_fkey";

-- DropForeignKey
ALTER TABLE "jobs" DROP CONSTRAINT "jobs_roleId_fkey";

-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "companyId",
DROP COLUMN "roleId",
ADD COLUMN     "company" TEXT NOT NULL,
ADD COLUMN     "role" TEXT NOT NULL;

-- DropTable
DROP TABLE "companies";

-- DropTable
DROP TABLE "roles";
