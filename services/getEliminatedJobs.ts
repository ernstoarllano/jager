import { prisma } from 'lib/prisma'

export const getEliminatedJobs = async () => {
  try {
    const totalEliminated = await prisma.job.count({
      where: {
        eliminated: {
          equals: true,
        },
      },
    })

    return { totalEliminated }
  } catch (err) {
    console.error(err)

    throw err
  }
}
