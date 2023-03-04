/*
  Warnings:

  - You are about to drop the column `company` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `location` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `jobs` table. All the data in the column will be lost.
  - You are about to drop the column `url` on the `jobs` table. All the data in the column will be lost.
  - Added the required column `companyId` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `roleId` to the `jobs` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `jobs` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "jobs" DROP COLUMN "company",
DROP COLUMN "location",
DROP COLUMN "title",
DROP COLUMN "url",
ADD COLUMN     "companyId" TEXT NOT NULL,
ADD COLUMN     "roleId" TEXT NOT NULL,
ADD COLUMN     "userId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "companies"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "jobs" ADD CONSTRAINT "jobs_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "roles"("id") ON DELETE CASCADE ON UPDATE CASCADE;
