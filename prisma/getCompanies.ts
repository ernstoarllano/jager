
import { prisma } from '@/lib/prisma'

export const getCompanies = async (): Promise<Promise<Record<any, any>[]> | null> => {
  try {
    const companies = await prisma.company.findMany({
      select: {
        id: true,
        name: true,
      },
    })

    return JSON.parse(JSON.stringify(companies))
  } catch (err) {
    throw err
  }
}