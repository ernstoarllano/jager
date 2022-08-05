import { prisma } from 'lib/prisma'

export const getEliminatedJobs = async () => {
  try {
    const eliminated = await prisma.job.count({
      where: {
        eliminated: {
          equals: true,
        },
      },
    })

    return { eliminated }
  } catch (err) {
    console.error(err)

    throw err
  }
}
