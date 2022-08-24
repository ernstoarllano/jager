import { prisma } from 'lib/prisma'

export const getJobs = async () => {
  try {
    // Return all jobs
    const jobs = await prisma.job.findMany({
      orderBy: {
        id: 'asc',
      },
      select: {
        id: true,
        role: true,
        recruiter: true,
        manager: true,
        company: true,
        salary: true,
        screenedOn: true,
        interviewedOn: true,
        eliminated: true,
      },
    })

    // Return count of all jobs
    const applied = await prisma.job.count()

    // Return count of all jobs eliminated
    const eliminated = await prisma.job.count({
      where: {
        eliminated: true,
      },
    })

    // Return recently applied jobs
    const now = new Date()
    const recent = await prisma.job.findMany({
      orderBy: {
        appliedOn: 'desc',
      },
      where: {
        appliedOn: {
          gt: new Date(now.setDate(now.getDate() - 14)),
        },
      },
      select: {
        id: true,
        role: true,
        company: true,
        salary: true,
        appliedOn: true,
        screened: true,
        interviewed: true,
        eliminated: true,
      },
    })

    return { jobs, applied, eliminated, recent }
  } catch (err) {
    console.error(err)

    throw err
  }
}
