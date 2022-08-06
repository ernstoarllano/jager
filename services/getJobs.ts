import { prisma } from 'lib/prisma'

export const getJobs = async () => {
  try {
    const jobs = await prisma.job.findMany({
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

    return { jobs: JSON.parse(JSON.stringify(jobs)) }
  } catch (err) {
    console.error(err)

    throw err
  }
}
