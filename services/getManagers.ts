import { prisma } from 'lib/prisma'

export const getManagers = async (take: number = 6) => {
  try {
    const managers = await prisma.manager.findMany({
      include: {
        company: true,
      },
      orderBy: {
        lastName: 'asc',
      },
      take: take,
    })

    return { managers }
  } catch (err) {
    console.error(err)

    throw err
  }
}
