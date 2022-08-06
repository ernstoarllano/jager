import { prisma } from 'lib/prisma'

export const getJobsByDate = async () => {
  try {
    const jobsByDate = await prisma.job.groupBy({
      by: ['appliedOn'],
      _count: true,
      orderBy: {
        appliedOn: 'asc',
      },
    })

    return { jobsByDate: JSON.parse(JSON.stringify(jobsByDate)) }
  } catch (err) {
    console.error(err)

    throw err
  }
}
