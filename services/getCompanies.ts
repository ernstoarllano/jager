import { prisma } from 'lib/prisma'

export const getCompanies = async () => {
  try {
    const companies = await prisma.company.findMany({
      select: {
        id: true,
        name: true,
      },
    })

    return { companies }
  } catch (err) {
    console.error(err)

    throw err
  }
}
