import { prisma } from 'lib/prisma'

export const getTotalApplications = async () => {
  try {
    const applications = await prisma.job.count()

    return { applications }
  } catch (err) {
    console.error(err)

    throw err
  }
}
