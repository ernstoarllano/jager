import { prisma } from 'lib/prisma'

export const getCompanies = async (take: number = 6) => {
  try {
    const companies = await prisma.company.findMany({
      orderBy: {
        name: 'asc',
      },
      take: take,
    })

    return { companies }
  } catch (err) {
    console.error(err)

    throw err
  }
}
