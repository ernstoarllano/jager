import { prisma } from 'lib/prisma'

export const getCompanies = async () => {
  try {
    const companies = await prisma.company.findMany()

    return { companies }
  } catch (err) {
    console.error(err)

    throw err
  }
}
