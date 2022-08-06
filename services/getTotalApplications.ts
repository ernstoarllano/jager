import { prisma } from 'lib/prisma'

export const getTotalApplications = async () => {
  try {
    const totalApplications = await prisma.job.count()

    return { totalApplications }
  } catch (err) {
    console.error(err)

    throw err
  }
}
