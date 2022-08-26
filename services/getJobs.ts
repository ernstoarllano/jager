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
        interviewer: true,
        company: true,
        salary: true,
        screenedOn: true,
        interviewedOn: true,
        eliminatedOn: true,
      },
    })

    // Return count of all jobs
    const applied = await prisma.job.count()

    // Return count of all jobs eliminated
    const eliminated = await prisma.job.count({
      where: {
        eliminatedOn: {
          not: null,
        },
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
          gte: new Date(now.setDate(now.getDate() - 14)),
        },
      },
      select: {
        id: true,
        role: true,
        company: true,
        salary: true,
        appliedOn: true,
        screenedOn: true,
        interviewedOn: true,
        eliminatedOn: true,
      },
      take: 5,
    })

    return { jobs, applied, eliminated, recent }
  } catch (err) {
    console.error(err)

    throw err
  }
}
