-- AlterTable
ALTER TABLE "jobs" ADD COLUMN     "acceptedAt" TIMESTAMP(3),
ADD COLUMN     "appliedAt" TIMESTAMP(3),
ADD COLUMN     "declinedAt" TIMESTAMP(3);
