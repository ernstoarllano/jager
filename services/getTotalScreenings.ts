import { prisma } from 'lib/prisma'

export const getTotalScreenings = async () => {
  try {
    const totalScreenings = await prisma.job.count({
      where: {
        screened: true,
      },
    })

    return { totalScreenings }
  } catch (err) {
    console.error(err)

    throw err
  }
}
