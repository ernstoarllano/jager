-- CreateTable
CREATE TABLE "Job" (
    "id" SERIAL NOT NULL,
    "roleId" INTEGER NOT NULL,
    "companyId" INTEGER NOT NULL,
    "recruiterId" INTEGER,
    "managerId" INTEGER,
    "salary" INTEGER NOT NULL,
    "appliedOn" TIMESTAMP(3) NOT NULL,
    "screened" BOOLEAN NOT NULL DEFAULT false,
    "screenedOn" TIMESTAMP(3),
    "interviewed" BOOLEAN NOT NULL DEFAULT false,
    "interviewedOn" TIMESTAMP(3),
    "hired" BOOLEAN NOT NULL DEFAULT false,
    "hiredOn" TIMESTAMP(3),
    "eliminated" BOOLEAN NOT NULL DEFAULT false,
    "elminatedOn" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Job_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Role" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Role_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Company" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "website" TEXT NOT NULL,

    CONSTRAINT "Company_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Recruiter" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "linkedIn" TEXT,
    "positiveExperience" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Recruiter_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Manager" (
    "id" SERIAL NOT NULL,
    "firstName" TEXT NOT NULL,
    "lastName" TEXT NOT NULL,
    "linkedIn" TEXT,
    "positiveExperience" BOOLEAN NOT NULL DEFAULT true,

    CONSTRAINT "Manager_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "_CompanyToRecruiter" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "_CompanyToManager" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToRecruiter_AB_unique" ON "_CompanyToRecruiter"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToRecruiter_B_index" ON "_CompanyToRecruiter"("B");

-- CreateIndex
CREATE UNIQUE INDEX "_CompanyToManager_AB_unique" ON "_CompanyToManager"("A", "B");

-- CreateIndex
CREATE INDEX "_CompanyToManager_B_index" ON "_CompanyToManager"("B");

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_roleId_fkey" FOREIGN KEY ("roleId") REFERENCES "Role"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_companyId_fkey" FOREIGN KEY ("companyId") REFERENCES "Company"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_recruiterId_fkey" FOREIGN KEY ("recruiterId") REFERENCES "Recruiter"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Job" ADD CONSTRAINT "Job_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "Manager"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToRecruiter" ADD CONSTRAINT "_CompanyToRecruiter_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToRecruiter" ADD CONSTRAINT "_CompanyToRecruiter_B_fkey" FOREIGN KEY ("B") REFERENCES "Recruiter"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToManager" ADD CONSTRAINT "_CompanyToManager_A_fkey" FOREIGN KEY ("A") REFERENCES "Company"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_CompanyToManager" ADD CONSTRAINT "_CompanyToManager_B_fkey" FOREIGN KEY ("B") REFERENCES "Manager"("id") ON DELETE CASCADE ON UPDATE CASCADE;
