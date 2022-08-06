import { prisma } from 'lib/prisma'

export const getTotalInterviews = async () => {
  try {
    const totalInterviews = await prisma.job.count({
      where: {
        interviewed: true,
      },
    })

    return { totalInterviews }
  } catch (err) {
    console.error(err)

    throw err
  }
}
